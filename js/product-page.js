document.addEventListener('alpine:init', () => {

    Alpine.store('productData', {
        currentProduct: null,

        init() {
            const slug = new URLSearchParams(window.location.search).get('slug');
            const id = new URLSearchParams(window.location.search).get('id');

            if (slug && typeof PRODUCTS !== 'undefined') {
                this.currentProduct = PRODUCTS.find(p => p.slug === slug);
            }

            if (!this.currentProduct && id && typeof PRODUCTS !== 'undefined') {
                const productId = parseInt(id);
                this.currentProduct = PRODUCTS.find(p => p.id === productId);

                if (this.currentProduct) {
                    window.history.replaceState(
                        {},
                        document.title,
                        `product.html?slug=${this.currentProduct.slug}`
                    );
                }
            }

            if (!this.currentProduct && typeof PRODUCTS !== 'undefined' && PRODUCTS.length > 0) {
                this.currentProduct = PRODUCTS[0];
            }

            if (this.currentProduct) {
                document.title = `${this.currentProduct.name} - pinkJeans`;
            }
        }
    });

    Alpine.data('productDetail', (config = {}) => {
        return {
            product: config.product || {},
            selectedOptions: {},
            quantity: 1,

            init() {
                if (this.product.options) {
                    Object.keys(this.product.options).forEach(optionName => {
                        if (this.product.options[optionName].length > 0) {
                            this.selectedOptions[optionName] = this.product.options[optionName][0];
                        }
                    });
                }
            },

            formatPrice(price) {
                return '$' + parseFloat(price).toFixed(2);
            },

            formatOptionName(name) {
                return name.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
            },

            formatFeatureKey(key) {
                return key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
            },

            getVariantKey() {
                if (!this.product.hasVariants) return null;

                const optionKeys = Object.keys(this.product.options);
                const optionValues = optionKeys.map(key => this.selectedOptions[key]);

                return optionValues.join('|');
            },

            isVariantInStock() {
                if (!this.product.hasVariants) {
                    return this.product.stock > 0;
                }

                const variantKey = this.getVariantKey();
                if (variantKey && this.product.option_variants_stock) {
                    return (this.product.option_variants_stock[variantKey] || 0) > 0;
                }

                return this.product.stock > 0;
            },

            getVariantStock() {
                if (!this.product.hasVariants) {
                    return this.product.stock;
                }

                const variantKey = this.getVariantKey();
                if (variantKey && this.product.option_variants_stock) {
                    return this.product.option_variants_stock[variantKey] || 0;
                }

                return 0;
            },

            getVariantPrice() {
                let price = this.product.base_price || this.product.price || 0;

                if (this.product.option_price_adjustments) {
                    Object.entries(this.selectedOptions).forEach(([optionName, optionValue]) => {
                        if (
                            this.product.option_price_adjustments[optionName] &&
                            this.product.option_price_adjustments[optionName][optionValue]
                        ) {
                            price += this.product.option_price_adjustments[optionName][optionValue];
                        }
                    });
                }

                return price;
            },

            getVariantShippingCost() {
                if (this.product.free_shipping) {
                    return 0;
                }

                let shippingCost = this.product.base_shipping_cost || 0;

                if (this.product.option_shipping_adjustments) {
                    Object.entries(this.selectedOptions).forEach(([optionName, optionValue]) => {
                        if (
                            this.product.option_shipping_adjustments[optionName] &&
                            this.product.option_shipping_adjustments[optionName][optionValue] !== undefined
                        ) {
                            shippingCost += this.product.option_shipping_adjustments[optionName][optionValue];
                        }
                    });
                }

                return Math.max(0, shippingCost);
            },

            getProductWeight() {
                let weight = {...this.product.weight};

                if (this.product.option_dimension_overrides) {
                    Object.entries(this.selectedOptions).forEach(([optionName, optionValue]) => {
                        if (
                            this.product.option_dimension_overrides[optionName] &&
                            this.product.option_dimension_overrides[optionName][optionValue] &&
                            this.product.option_dimension_overrides[optionName][optionValue].weight
                        ) {
                            weight = this.product.option_dimension_overrides[optionName][optionValue].weight;
                        }
                    });
                }

                return weight;
            },

            getProductDimensions() {
                let dimensions = {...this.product.dimensions};

                if (this.product.option_dimension_overrides) {
                    Object.entries(this.selectedOptions).forEach(([optionName, optionValue]) => {
                        if (
                            this.product.option_dimension_overrides[optionName] &&
                            this.product.option_dimension_overrides[optionName][optionValue] &&
                            this.product.option_dimension_overrides[optionName][optionValue].dimensions
                        ) {
                            dimensions = this.product.option_dimension_overrides[optionName][optionValue].dimensions;
                        }
                    });
                }

                return dimensions;
            },

            updateVariantInfo() {
                this.selectedOptions = {...this.selectedOptions};

                const productViewer = document.querySelector('[x-data*="productViewer"]');
                if (productViewer && this.product.hasVariants) {
                    const viewerData = Alpine.$data(productViewer);
                    if (viewerData) {
                        viewerData.selectedOptions = {...this.selectedOptions};
                        viewerData.selectedImage = '';
                    }
                }
            },

            isOptionValueAvailable(optionType, optionValue) {
                if (!this.product || !this.product.hasVariants) return true;

                const tempSelection = {...this.selectedOptions};
                tempSelection[optionType] = optionValue;

                const optionKeys = Object.keys(this.product.options);
                const optionValues = optionKeys.map(key => tempSelection[key]);
                const variantKey = optionValues.join('|');

                return (this.product.option_variants_stock[variantKey] || 0) > 0;
            },

            selectOption(option, value) {
                this.selectedOptions[option] = value;
                this.updateVariantInfo();

                const productViewer = document.querySelector('[x-data*="productViewer"]');
                if (productViewer) {
                    const viewerData = Alpine.$data(productViewer);
                    if (viewerData) {
                        viewerData.selectedOptions[option] = value;
                        viewerData.selectedImage = '';
                        viewerData.scrollToOptionThumbnails();
                    }
                }
            },

            addToCart() {
                Alpine.store('cart').addItem(
                    this.product,
                    this.quantity,
                    this.selectedOptions
                );
            },

            increaseQuantity() {
                const maxStock = this.getVariantStock();
                if (this.quantity < maxStock) {
                    this.quantity++;
                }
            },

            decreaseQuantity() {
                if (this.quantity > 1) {
                    this.quantity--;
                }
            }
        };
    });

    Alpine.data('productViewer', function(product) {
        return {
            product: product,
            selectedImage: '',
            selectedOptions: {},
            isScrollLeftEnd: true,
            isScrollRightEnd: false,

            zoomed: false,
            isTouchDevice: false,
            scale: 2,
            origin: '50% 50%',
            panX: 0,
            panY: 0,
            minPanX: 0,
            maxPanX: 0,
            minPanY: 0,
            maxPanY: 0,
            dragStartX: 0,
            dragStartY: 0,
            dragging: false,
            lastTap: 0,
            imgStyle: '',

            init() {
                if (this.product) {
                    this.selectedImage = this.product.images && this.product.images.length > 0
                        ? this.product.images[0]
                        : '';

                    this.selectedOptions = {};
                    if (this.product.options) {
                        for (const option in this.product.options) {
                            if (this.product.options[option] && this.product.options[option].length > 0) {
                                this.selectedOptions[option] = this.product.options[option][0];
                            }
                        }
                    }

                    setTimeout(() => {
                        this.checkScrollPosition();
                    }, 100);

                    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
                    this.imgStyle = 'transform: scale(1); transform-origin: 50% 50%;';
                }
            },

            getVariantKey() {
                if (!this.product.hasVariants) return null;

                const optionKeys = Object.keys(this.product.options);
                const optionValues = optionKeys.map(key => this.selectedOptions[key]);

                return optionValues.join('|');
            },

            formatVariantName(variant) {
                return variant
                    .split('|')
                    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
                    .join(' + ');
            },

            selectVariantFromKey(key) {
                if (!key) return;

                const parts = key.split('|');
                const optionNames = Object.keys(this.product.options);

                for (let i = 0; i < parts.length && i < optionNames.length; i++) {
                    this.selectedOptions[optionNames[i]] = parts[i];
                }

                const productDetail = this.$el.closest('[x-data*="productDetail"]');
                if (productDetail) {
                    const detailData = Alpine.$data(productDetail);
                    if (detailData) {
                        detailData.selectedOptions = {...this.selectedOptions};
                        detailData.updateVariantInfo();
                    }
                }
            },

            hasThumbnails() {
                let count = 0;
                count += this.product.images ? this.product.images.length : 0;

                if (this.product.option_images) {
                    for (const optionType in this.product.option_images) {
                        for (const optionValue in this.product.option_images[optionType]) {
                            count += this.product.option_images[optionType][optionValue].length;
                        }
                    }
                }

                if (this.product.variant_images) {
                    for (const key in this.product.variant_images) {
                        if (Array.isArray(this.product.variant_images[key])) {
                            count += this.product.variant_images[key].length;
                        } else {
                            count += 1;
                        }
                    }
                }

                return count > 1;
            },

            getSelectedImage() {
                if (!this.product) return '';

                try {
                    if (this.selectedImage) {
                        return this.selectedImage;
                    }

                    const variantKey = this.getVariantKey();
                    if (variantKey && this.product.variant_images && this.product.variant_images[variantKey]) {
                        const variantImage = this.product.variant_images[variantKey];
                        return Array.isArray(variantImage) ? variantImage[0] : variantImage;
                    }

                    if (this.product.option_images) {
                        for (const [option, value] of Object.entries(this.selectedOptions)) {
                            if (
                                this.product.option_images[option] &&
                                this.product.option_images[option][value] &&
                                this.product.option_images[option][value].length > 0
                            ) {
                                return this.product.option_images[option][value][0];
                            }
                        }
                    }

                    return this.product.images && this.product.images.length > 0
                        ? this.product.images[0]
                        : '';
                } catch (error) {
                    console.error("Error in getSelectedImage:", error);
                    return this.product.images && this.product.images.length > 0
                        ? this.product.images[0]
                        : '';
                }
            },

            selectImage(image) {
                this.selectedImage = image;
                this.resetZoom();

                if (this.product.option_images) {
                    for (const [option, values] of Object.entries(this.product.option_images)) {
                        for (const [value, images] of Object.entries(values)) {
                            if (images.includes(image)) {
                                this.selectOption(option, value);
                                return;
                            }
                        }
                    }
                }

                if (this.product.variant_images) {
                    for (const [key, variantImage] of Object.entries(this.product.variant_images)) {
                        if ((Array.isArray(variantImage) && variantImage.includes(image)) ||
                            variantImage === image) {
                            this.selectVariantFromKey(key);
                            return;
                        }
                    }
                }
            },

            selectOption(option, value) {
                this.selectedOptions[option] = value;
                this.selectedImage = '';
                this.resetZoom();

                this.$nextTick(() => {
                    this.scrollToOptionThumbnails();
                });

                const productDetail = this.$el.closest('[x-data*="productDetail"]');
                if (productDetail) {
                    const detailData = Alpine.$data(productDetail);
                    if (detailData) {
                        detailData.selectedOptions[option] = value;
                        detailData.updateVariantInfo();
                    }
                }
            },

            scrollThumbnails(direction) {
                const container = this.$refs.thumbnailsContainer;
                if (!container) return;

                const scrollAmount = container.clientWidth * 0.75;
                if (direction === 'left') {
                    container.scrollLeft -= scrollAmount;
                } else {
                    container.scrollLeft += scrollAmount;
                }

                setTimeout(() => {
                    this.checkScrollPosition();
                }, 100);
            },

            checkScrollPosition() {
                const container = this.$refs.thumbnailsContainer;
                if (!container) return;

                this.isScrollLeftEnd = container.scrollLeft <= 0;
                this.isScrollRightEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;
            },

            scrollToOptionThumbnails() {
                const container = this.$refs.thumbnailsContainer;
                if (!container) return;

                this.$nextTick(() => {
                    let thumbnailSelector = null;

                    for (const [option, value] of Object.entries(this.selectedOptions)) {
                        if (this.product.option_images &&
                            this.product.option_images[option] &&
                            this.product.option_images[option][value]) {

                            thumbnailSelector = `[data-thumbnail-type="option"][data-option-type="${option}"][data-option-value="${value}"]`;
                            break;
                        }
                    }

                    if (!thumbnailSelector) {
                        const variantKey = this.getVariantKey();
                        if (variantKey && this.product.variant_images && this.product.variant_images[variantKey]) {
                            thumbnailSelector = `[data-thumbnail-type="variant"][data-variant-key="${variantKey}"]`;
                        }
                    }

                    if (thumbnailSelector) {
                        const thumbnail = container.querySelector(thumbnailSelector);
                        if (thumbnail) {
                            thumbnail.scrollIntoView({
                                behavior: 'smooth',
                                block: 'nearest',
                                inline: 'center'
                            });
                        }
                    }

                    this.checkScrollPosition();
                });
            },

            mouseMove(e) {
                if (!this.zoomed || this.isTouchDevice) return;

                const img = this.$refs.mainImage;
                if (!img) return;

                const rect = img.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;

                this.origin = `${x}% ${y}%`;
                this.updateZoomStyle();
            },

            mouseEnter(e) {
                if (this.isTouchDevice) return;
                this.zoomed = true;
                this.mouseMove(e);
            },

            mouseLeave() {
                if (this.isTouchDevice) return;
                this.zoomed = false;
                this.resetZoom();
            },

            touchStart(e) {
                if (e.touches.length > 1) return;

                const now = Date.now();
                if (now - this.lastTap < 300) {
                    this.zoomed = !this.zoomed;
                    if (this.zoomed) {
                        const img = this.$refs.mainImage;
                        if (!img) return;

                        const rect = img.getBoundingClientRect();
                        const touch = e.touches[0];
                        const x = ((touch.clientX - rect.left) / rect.width) * 100;
                        const y = ((touch.clientY - rect.top) / rect.height) * 100;

                        this.origin = `${x}% ${y}%`;
                        this.panX = 0;
                        this.panY = 0;
                        this.calculatePanLimits();
                        this.updateZoomStyle();
                    } else {
                        this.resetZoom();
                    }
                    e.preventDefault();
                } else if (this.zoomed) {
                    this.dragging = true;
                    this.dragStartX = e.touches[0].clientX - this.panX;
                    this.dragStartY = e.touches[0].clientY - this.panY;
                }

                this.lastTap = now;
            },

            touchMove(e) {
                if (!this.zoomed || !this.dragging || e.touches.length > 1) return;

                const touchX = e.touches[0].clientX;
                const touchY = e.touches[0].clientY;

                this.panX = touchX - this.dragStartX;
                this.panY = touchY - this.dragStartY;

                this.panX = Math.max(this.minPanX, Math.min(this.maxPanX, this.panX));
                this.panY = Math.max(this.minPanY, Math.min(this.maxPanY, this.panY));

                this.updateZoomStyle();
                e.preventDefault();
            },

            touchEnd() {
                this.dragging = false;
            },

            updateZoomStyle() {
                if (!this.zoomed) {
                    this.imgStyle = 'transform: scale(1); transform-origin: 50% 50%; transition: transform 0.3s ease;';
                    return;
                }

                if (this.isTouchDevice) {
                    const transform = `scale(${this.scale}) translate(${this.panX}px, ${this.panY}px)`;
                    this.imgStyle = `transform: ${transform}; transform-origin: ${this.origin}; transition: none;`;
                } else {
                    this.imgStyle = `transform: scale(${this.scale}); transform-origin: ${this.origin}; transition: transform-origin 0.1s ease;`;
                }
            },

            resetZoom() {
                this.zoomed = false;
                this.panX = 0;
                this.panY = 0;
                this.origin = '50% 50%';
                this.updateZoomStyle();
            },

            calculatePanLimits() {
                const img = this.$refs.mainImage;
                if (!img) return;

                const rect = img.getBoundingClientRect();
                this.maxPanX = (rect.width * (this.scale - 1)) / 2;
                this.minPanX = -this.maxPanX;
                this.maxPanY = (rect.height * (this.scale - 1)) / 2;
                this.minPanY = -this.maxPanY;
            },

            handleImageError(event) {
                const img = event.target;
                const width = img.width || 400;
                const height = img.height || 300;

                // Create SVG fallback as a data URL
                const svgContent = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                      <rect width="100%" height="100%" fill="#f3f4f6"/>
                      <svg x="${width/2 - 24}" y="${height/2 - 24}" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="9.5" cy="9.5" r="1.5" fill="#9ca3af"/>
                      </svg>
                      <text x="50%" y="70%" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#6b7280">Image Not Available</text>
                    </svg>
                  `;

                // Convert SVG to a data URI
                const encodedSVG = encodeURIComponent(svgContent);
                const dataURI = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;

                // Replace the image source with the SVG data URI
                img.src = dataURI;

                // Prevent further error handling
                img.onerror = null;
            }
        };
    });

    Alpine.data('whatsappInquiry', (config = {}) => {
        return {
            phoneNumber: config.phoneNumber || Alpine.store('ui').whatsAppNumber,
            buttonText: config.buttonText || 'Ask about this product',

            inquireAboutProduct() {
                const productDetail = this.$el.closest('[x-data*="productDetail"]');
                if (!productDetail) return this.sendSimpleInquiry();

                const productData = Alpine.$data(productDetail);
                if (!productData) return this.sendSimpleInquiry();

                const product = productData.product;
                const quantity = productData.quantity;
                const selectedOptions = productData.selectedOptions;

                let message = `Hello, I'm interested in: ${product.name}`;

                if (quantity > 1) {
                    message += ` (Quantity: ${quantity})`;
                }

                const variantPrice = productData.getVariantPrice();
                message += `\nPrice: $${variantPrice.toFixed(2)}`;

                if (selectedOptions && Object.keys(selectedOptions).length > 0) {
                    message += '\nSelected options:';
                    Object.entries(selectedOptions).forEach(([option, value]) => {
                        message += `\n- ${option}: ${value}`;
                    });
                }

                const shippingCost = productData.getVariantShippingCost();
                message += `\nShipping: ${shippingCost === 0 ? 'Free' : '$' + shippingCost.toFixed(2)}`;

                const stock = productData.getVariantStock();
                message += `\nStock status: ${stock > 0 ? `${stock} available` : 'Out of stock'}`;

                const currentUrl = window.location.href;
                message += `\n\nProduct link: ${currentUrl}`;

                message += '\n\nCould you provide me with more information about this product?';

                this.sendWhatsAppMessage(message);
            },

            sendSimpleInquiry(customMessage = 'Hello, I have a question about your products.') {
                this.sendWhatsAppMessage(customMessage);
            },

            sendWhatsAppMessage(message) {
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/${this.phoneNumber}?text=${encodedMessage}`, '_blank');
            }
        };
    });

    // Related Products Component
    Alpine.data('relatedProducts', function(config = {}) {
        return {
            products: [],
            currentProductId: null,
            maxProducts: config.maxProducts || 4,
            title: config.title || 'You May Also Like',
            allProducts: [],

            init() {
                // Get reference to all products
                this.allProducts = typeof PRODUCTS !== 'undefined' ? PRODUCTS : [];

                // Get current product ID from store or config
                this.currentProductId = config.productId ||
                    (Alpine.store('productData')?.currentProduct?.id);

                if (this.currentProductId && this.allProducts.length > 0) {
                    this.loadRelatedProducts();
                }
            },

            loadRelatedProducts() {
                // Find current product
                const currentProduct = this.allProducts.find(p => p.id === this.currentProductId);

                if (!currentProduct) return;

                // Get explicitly defined related products
                const relatedIds = currentProduct.relatedProducts || [];
                this.products = this.allProducts.filter(p => relatedIds.includes(p.id))
                    .slice(0, this.maxProducts);

                // If not enough related products, add featured products as fallback
                if (this.products.length < this.maxProducts) {
                    const featuredProducts = this.allProducts.filter(p =>
                        p.isFeatured &&
                        p.id !== this.currentProductId &&
                        !relatedIds.includes(p.id)
                    );

                    this.products = [...this.products, ...featuredProducts]
                        .slice(0, this.maxProducts);
                }

                // If still not enough, just add random products
                if (this.products.length < this.maxProducts && this.allProducts.length > this.maxProducts) {
                    const randomProducts = this.allProducts.filter(p =>
                        p.id !== this.currentProductId &&
                        !this.products.some(rp => rp.id === p.id)
                    );

                    this.products = [
                        ...this.products,
                        ...randomProducts.slice(0, this.maxProducts - this.products.length)
                    ];
                }
            }
        };
    });

});

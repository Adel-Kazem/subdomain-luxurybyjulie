const PRODUCTS = [
    {
        id: 1,
        name: "Premium Cotton T-Shirt",
        description: "Our premium cotton t-shirt is perfectly crafted for exceptional comfort and durability. Ideal for casual wear or layering for a stylish everyday look.",
        base_price: 35.99,
        base_shipping_cost: 5.99,
        free_shipping: false,
        sku: "APRL-TSH-001",
        slug: "premium-cotton-tshirt",
        brand: "Refined Apparel",
        rating: 4.8,
        reviews_count: 48,
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 12,
        hasVariants: true,
        totalVariantStock: 12,
        lowStockThreshold: 3,
        features: {
            material: "100% organic cotton",
            texture: "Ultra-soft fabric",
            design: "Classic fit with ribbed collar",
            washing: "Pre-shrunk for perfect fit",
            manufacturing: "Ethically produced"
        },
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            size: [
                "S",
                "M",
                "L"
            ]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            S: 4,
            M: 4,
            L: 4
        },
        option_price_adjustments: {
            size: {
                M: 2,
                L: 4
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 0.3,
            unit: "lb"
        },
        dimensions: {
            length: 10,
            width: 8,
            height: 1,
            unit: "in"
        },
        option_dimension_overrides: {
            size: {
                S: {
                    weight: {
                        value: 0.3,
                        unit: "lb"
                    }
                },
                M: {
                    weight: {
                        value: 0.35,
                        unit: "lb"
                    }
                },
                L: {
                    weight: {
                        value: 0.4,
                        unit: "lb"
                    }
                }
            }
        },
        categories: [
            1,
            2,
            3
        ],
        upselling: [
            3
        ],
        crossSelling: [
            5,
            6
        ],
        relatedProducts: [
            2
        ],
        createdAt: "2025-01-01T00:00:00Z",
        updatedAt: "2025-04-01T00:00:00Z"
    },
    {
        id: 2,
        name: "Classic Denim Jeans",
        description: "A versatile wardrobe staple that delivers robust style and comfort. Our denim jeans are hand-selected for consistent quality and perfect fit.",
        base_price: 58.99,
        base_shipping_cost: 5.99,
        free_shipping: false,
        sku: "APRL-JNS-002",
        slug: "classic-denim-jeans",
        brand: "Refined Apparel",
        rating: 4.6,
        reviews_count: 35,
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 25,
        hasVariants: true,
        totalVariantStock: 25,
        lowStockThreshold: 5,
        features: {
            material: "Premium stretch denim",
            fit: "Classic straight leg",
            aging: "Stone-washed for vintage look",
            design: "Five-pocket styling",
            durability: "Reinforced stitching"
        },
        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            size: [
                "30",
                "32",
                "34"
            ]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            "30": 8,
            "32": 8,
            "34": 9
        },
        option_price_adjustments: {
            size: {
                "32": 2,
                "34": 4
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 0.8,
            unit: "lb"
        },
        dimensions: {
            length: 12,
            width: 8,
            height: 2,
            unit: "in"
        },
        option_dimension_overrides: {
            size: {
                "30": {
                    weight: {
                        value: 0.8,
                        unit: "lb"
                    }
                },
                "32": {
                    weight: {
                        value: 0.9,
                        unit: "lb"
                    }
                },
                "34": {
                    weight: {
                        value: 1,
                        unit: "lb"
                    }
                }
            }
        },
        categories: [
            1,
            2,
            3
        ],
        upselling: [
            1,
            3
        ],
        crossSelling: [
            5,
            6
        ],
        relatedProducts: [
            1
        ],
        createdAt: "2025-01-15T00:00:00Z",
        updatedAt: "2025-04-05T00:00:00Z"
    },
    {
        id: 3,
        name: "Cashmere Sweater",
        description: "The most luxurious sweater in our collection, our cashmere sweater is buttery soft with a delicate, lightweight feel. Perfect for special occasions or when only the best will do.",
        base_price: 142.99,
        base_shipping_cost: 5.99,
        free_shipping: false,
        sku: "APRL-SWT-003",
        slug: "cashmere-sweater",
        brand: "Refined Apparel",
        rating: 4.9,
        reviews_count: 62,
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 18,
        hasVariants: true,
        totalVariantStock: 18,
        lowStockThreshold: 4,
        features: {
            material: "100% pure cashmere",
            texture: "Exceptionally soft",
            design: "Timeless crew neck style",
            care: "Dry clean recommended",
            sustainability: "Ethically sourced cashmere"
        },
        images: [
            "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1580331451032-19b2a16cb309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            size: [
                "S",
                "M"
            ]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            S: 9,
            M: 9
        },
        option_price_adjustments: {
            size: {
                M: 15
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 0.5,
            unit: "lb"
        },
        dimensions: {
            length: 12,
            width: 10,
            height: 1,
            unit: "in"
        },
        option_dimension_overrides: {
            size: {
                S: {
                    weight: {
                        value: 0.5,
                        unit: "lb"
                    }
                },
                M: {
                    weight: {
                        value: 0.6,
                        unit: "lb"
                    }
                }
            }
        },
        categories: [
            1,
            5
        ],
        upselling: [],
        crossSelling: [
            1,
            2
        ],
        relatedProducts: [
            1,
            2
        ],
        createdAt: "2025-01-10T00:00:00Z",
        updatedAt: "2025-03-25T00:00:00Z"
    },
    {
        id: 4,
        name: "Wool Peacoat",
        description: "Our carefully selected peacoat has the perfect weight and design for cold weather. The classic silhouette pairs perfectly with both casual and formal attire.",
        base_price: 186.99,
        base_shipping_cost: 12.99,
        free_shipping: false,
        sku: "APRL-COT-004",
        slug: "wool-peacoat",
        brand: "Refined Apparel",
        rating: 4.7,
        reviews_count: 39,
        status: "active",
        isFeatured: false,
        isOnSale: true,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 8,
        hasVariants: true,
        totalVariantStock: 8,
        lowStockThreshold: 3,
        features: {
            material: "80% wool, 20% polyester blend",
            insulation: "Warm without being bulky",
            durability: "Designed to last for years",
            details: "Double-breasted with anchor buttons",
            pockets: "Two exterior pockets, one interior pocket"
        },
        images: [
            "https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            size: [
                "M",
                "L"
            ]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            M: 5,
            L: 3
        },
        option_price_adjustments: {
            size: {
                L: 15
            }
        },
        option_shipping_adjustments: {
            size: {
                L: 2
            }
        },
        weight: {
            value: 3,
            unit: "lb"
        },
        dimensions: {
            length: 24,
            width: 18,
            height: 3,
            unit: "in"
        },
        option_dimension_overrides: {
            size: {
                M: {
                    weight: {
                        value: 3,
                        unit: "lb"
                    }
                },
                L: {
                    weight: {
                        value: 3.5,
                        unit: "lb"
                    },
                    dimensions: {
                        length: 26,
                        width: 20,
                        height: 3,
                        unit: "in"
                    }
                }
            }
        },
        categories: [
            1
        ],
        upselling: [
            5
        ],
        crossSelling: [
            6
        ],
        relatedProducts: [
            5
        ],
        createdAt: "2025-01-20T00:00:00Z",
        updatedAt: "2025-04-10T00:00:00Z"
    },
    {
        id: 5,
        name: "Leather Jacket",
        description: "This classic leather jacket is rich in style and perfect for cool weather. The timeless design features quality construction and attention to detail.",
        base_price: 218.99,
        base_shipping_cost: 10.99,
        free_shipping: false,
        sku: "APRL-LTH-005",
        slug: "leather-jacket",
        brand: "Refined Apparel",
        rating: 4.8,
        reviews_count: 42,
        status: "active",
        isFeatured: false,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 15,
        hasVariants: true,
        totalVariantStock: 15,
        lowStockThreshold: 4,
        features: {
            material: "Genuine cowhide leather",
            lining: "Soft polyester lining",
            pockets: "Four exterior pockets, two interior pockets",
            closure: "Heavy-duty YKK zipper",
            durability: "Designed to develop a beautiful patina over time"
        },
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            style: [
                "Classic",
                "Moto"
            ],
            size: [
                "S",
                "M",
                "L"
            ]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            "Classic|S": 3,
            "Classic|M": 3,
            "Classic|L": 3,
            "Moto|S": 2,
            "Moto|M": 2,
            "Moto|L": 2
        },
        option_price_adjustments: {
            style: {
                Moto: 25
            },
            size: {
                M: 10,
                L: 20
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 2.5,
            unit: "lb"
        },
        dimensions: {
            length: 24,
            width: 18,
            height: 3,
            unit: "in"
        },
        option_dimension_overrides: {},
        categories: [
            1,
            2,
            4
        ],
        upselling: [
            1,
            2
        ],
        crossSelling: [
            4,
            6
        ],
        relatedProducts: [
            4
        ],
        createdAt: "2025-01-25T00:00:00Z",
        updatedAt: "2025-03-30T00:00:00Z"
    },
    {
        id: 6,
        name: "Athletic Performance Socks",
        description: "Our athletic socks are designed for comfort and performance. Available in various styles to suit your sporting and everyday needs.",
        base_price: 12.99,
        base_shipping_cost: 3.99,
        free_shipping: false,
        sku: "APRL-SOK-006",
        slug: "athletic-performance-socks",
        brand: "Refined Apparel",
        rating: 4.5,
        reviews_count: 53,
        status: "active",
        isFeatured: false,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 30,
        hasVariants: true,
        totalVariantStock: 30,
        lowStockThreshold: 6,
        features: {
            material: "Moisture-wicking blend",
            comfort: "Cushioned sole",
            support: "Arch support for reduced fatigue",
            packaging: "Packaged in sets of 3 pairs",
            versatility: "Perfect for running, training, or everyday wear"
        },
        images: [
            "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            height: [
                "Ankle",
                "Crew",
                "Knee-High"
            ]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            Ankle: 10,
            Crew: 10,
            "Knee-High": 10
        },
        option_price_adjustments: {
            height: {
                Crew: 2,
                "Knee-High": 4.5
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 0.2,
            unit: "lb"
        },
        dimensions: {
            length: 8,
            width: 6,
            height: 2,
            unit: "in"
        },
        option_dimension_overrides: {},
        categories: [
            1,
            6
        ],
        upselling: [
            4,
            5
        ],
        crossSelling: [
            1,
            2
        ],
        relatedProducts: [
            4,
            5
        ],
        createdAt: "2025-03-01T00:00:00Z",
        updatedAt: "2025-04-15T00:00:00Z"
    },
    {
        id: 7,
        name: "Consequatur ea ut cu",
        description: "Debitis commodi nihi",
        base_price: 85,
        base_shipping_cost: 13,
        free_shipping: false,
        sku: "Itaque anim quia off",
        slug: "new-product",
        brand: "Est aute consequatur",
        rating: 0,
        reviews_count: 0,
        status: "draft",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: false,
        requiresInventoryTracking: false,
        stock: 0,
        hasVariants: false,
        totalVariantStock: 0,
        lowStockThreshold: 5,
        features: {},
        images: [
            "https://raw.githubusercontent.com/Adel-Kazem/subdomain-pinkjeans/main/products_images/1.png"
        ],
        options: {
            newOption0: [
                "yellow",
                "black"
            ]
        },
        option_images: {
            newOption0: {
                yellow: [
                    "https://raw.githubusercontent.com/Adel-Kazem/subdomain-pinkjeans/main/products_images/2.png"
                ],
                "New value": [
                    "https://raw.githubusercontent.com/Adel-Kazem/subdomain-pinkjeans/main/products_images/3.png"
                ],
                black: [
                    "https://raw.githubusercontent.com/Adel-Kazem/subdomain-pinkjeans/main/products_images/3.png"
                ]
            }
        },
        variant_images: {},
        option_variants_stock: {},
        option_price_adjustments: {},
        option_shipping_adjustments: {},
        weight: {
            value: 5,
            unit: "lb"
        },
        dimensions: {
            length: 15,
            width: 56,
            height: 53,
            unit: "mm"
        },
        option_dimension_overrides: {},
        categories: [],
        createdAt: "2025-05-07T08:02:04.491Z",
        updatedAt: "2025-05-07T08:02:04.491Z"
    },
    {
        id: 8,
        name: "Sed necessitatibus n",
        description: "Non aliquam nisi in ",
        base_price: 16,
        base_shipping_cost: 50,
        free_shipping: false,
        sku: "Enim in cupiditate a",
        slug: "new-product",
        brand: "In pariatur Aliquid",
        rating: 0,
        reviews_count: 0,
        status: "active",
        isFeatured: true,
        isOnSale: true,
        requiresShipping: false,
        requiresInventoryTracking: true,
        stock: 0,
        hasVariants: true,
        totalVariantStock: 60,
        lowStockThreshold: 5,
        features: {},
        images: [
            "https://raw.githubusercontent.com/Adel-Kazem/subdomain-pinkjeans/main/products_images/1.png"
        ],
        options: {
            newOption0: [
                "yellow",
                "red",
                "blue ^ shoes"
            ],
            newOption1: [
                "medium",
                "large"
            ]
        },
        option_images: {
            newOption0: {
                yellow: [
                    "https://raw.githubusercontent.com/Adel-Kazem/subdomain-pinkjeans/main/products_images/2.png"
                ],
                "New value": [
                    "https://raw.githubusercontent.com/Adel-Kazem/subdomain-pinkjeans/main/products_images/5.png"
                ],
                red: [
                    "https://raw.githubusercontent.com/Adel-Kazem/subdomain-pinkjeans/main/products_images/4.png"
                ],
                "blue ^ shoes": [
                    "https://raw.githubusercontent.com/Adel-Kazem/subdomain-pinkjeans/main/products_images/5.png"
                ]
            }
        },
        variant_images: {},
        option_variants_stock: {
            "yellow|medium": 10,
            "yellow|large": 10,
            "red|medium": 10,
            "red|large": 10,
            "blue ^ shoes|medium": 10,
            "blue ^ shoes|large": 10
        },
        option_price_adjustments: {
            newOption0: {
                "blue ^ shoes": 10
            },
            newOption1: {
                large: 5
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 26,
            unit: "kg"
        },
        dimensions: {
            length: 97,
            width: 57,
            height: 77,
            unit: "mm"
        },
        option_dimension_overrides: {},
        categories: [],
        createdAt: "2025-05-07T08:35:16.460Z",
        updatedAt: "2025-05-07T08:41:13.016Z"
    }
];
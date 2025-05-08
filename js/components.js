// components.js - Shared Alpine.js Components for LuxuryByJulie
document.addEventListener('alpine:init', () => {
    // Site Header Component
    Alpine.data('siteHeader', (config = {}) => {
        return {
            activeLink: config.activeLink || '',
            init() {
                // Any initialization logic here
            },
            template: `
        <nav class="fixed w-full z-50 bg-white/80 backdrop-blur-lg" x-data="{ isOpen: false }">
          <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
              <!-- Logo - Brush Style with Pink Color -->
              <a href="index.html" id="main-logo" class="text-3xl font-dancing text-pink-500 brush-text rotate-on-hover transition-transform duration-300">LuxuryByJulie</a>
              
              <!-- Desktop Menu -->
              <div class="hidden md:flex space-x-12">
                <a href="index.html" id="nav-home" class="text-sm uppercase tracking-widest hover:text-pink-500" :class="activeLink === 'home' ? 'text-pink-500' : ''">Home</a>
                <a href="products.html" id="nav-shop" class="text-sm uppercase tracking-widest hover:text-pink-500" :class="activeLink === 'shop' ? 'text-pink-500' : ''">Shop</a>
                <a href="index.html#about" id="nav-about" class="text-sm uppercase tracking-widest hover:text-pink-500">About</a>
                <a href="index.html#contact" id="nav-contact" class="text-sm uppercase tracking-widest hover:text-pink-500">Contact</a>
              </div>
              
              <!-- Cart & Menu -->
              <div class="flex items-center gap-6">
                <a href="cart.html" class="relative" x-data :class="activeLink === 'cart' ? 'text-pink-500' : ''">
                  <svg class="h-6 w-6">
                    <use xlink:href="#icon-shopping-bag"></use>
                  </svg>
                  <span class="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center" x-text="$store.cart.getTotalItems()">0</span>
                </a>
                <button class="md:hidden" @click="isOpen = !isOpen">
                  <svg x-show="!isOpen" class="h-6 w-6">
                    <use xlink:href="#icon-menu"></use>
                  </svg>
                  <svg x-show="isOpen" class="h-6 w-6">
                    <use xlink:href="#icon-close"></use>
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Mobile Menu -->
            <div class="md:hidden" x-show="isOpen" 
                x-transition:enter="transition ease-out duration-200"
                x-transition:enter-start="opacity-0 -translate-y-4"
                x-transition:enter-end="opacity-100 translate-y-0"
                x-transition:leave="transition ease-in duration-150"
                x-transition:leave-start="opacity-100 translate-y-0"
                x-transition:leave-end="opacity-0 -translate-y-4"
                @click.away="isOpen = false">
              <div class="mt-4 flex flex-col space-y-6 py-6 px-4 bg-white rounded-lg shadow-lg">
                <a href="index.html" id="mobile-nav-home" class="text-sm uppercase tracking-widest hover:text-pink-500" :class="activeLink === 'home' ? 'text-pink-500' : ''">Home</a>
                <a href="products.html" id="mobile-nav-shop" class="text-sm uppercase tracking-widest hover:text-pink-500" :class="activeLink === 'shop' ? 'text-pink-500' : ''">Shop</a>
                <a href="index.html#about" id="mobile-nav-about" class="text-sm uppercase tracking-widest hover:text-pink-500">About</a>
                <a href="index.html#contact" id="mobile-nav-contact" class="text-sm uppercase tracking-widest hover:text-pink-500">Contact</a>
              </div>
            </div>
          </div>
        </nav>
      `
        };
    });

    // Site Footer Component
    Alpine.data('siteFooter', () => {
        return {
            template: `
        <footer id="contact" class="bg-white py-20 px-6">
          <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-4 gap-12">
              <div>
                <h3 id="footer-logo" class="inline-block text-2xl font-dancing text-pink-500 brush-text rotate-on-hover transition-transform duration-300 mb-6">LuxuryByJulie</h3>
                <p id="footer-slogan" class="text-zinc-600">Elegant footwear and accessories for the modern woman.</p>
              </div>
              <div>
                <h4 id="footer-quick-links-heading" class="font-semibold mb-6">Quick Links</h4>
                <ul class="space-y-4 text-zinc-600">
                  <li><a href="index.html" id="footer-link-home" class="hover:text-pink-500">Home</a></li>
                  <li><a href="products.html" id="footer-link-shop" class="hover:text-pink-500">Shop</a></li>
                  <li><a href="index.html#about" id="footer-link-about" class="hover:text-pink-500">About Us</a></li>
                </ul>
              </div>
              <div>
                <h4 id="footer-follow-us-heading" class="font-semibold mb-6">Follow Us</h4>
                <ul class="space-y-4 text-zinc-600">
                  <li><a href="#" id="footer-link-instagram" class="hover:text-pink-500">Instagram</a></li>
                  <li><a href="#" id="footer-link-facebook" class="hover:text-pink-500">Facebook</a></li>
                  <li><a href="#" id="footer-link-pinterest" class="hover:text-pink-500">Pinterest</a></li>
                </ul>
              </div>
              <div>
                <h4 id="footer-contact-heading" class="font-semibold mb-6">Contact</h4>
                <address id="footer-address" class="text-zinc-600 not-italic mb-4">
                  Beirut, Lebanon<br>
                  <a href="mailto:info@luxurybyjulie.com" class="hover:text-pink-500">info@luxurybyjulie.com</a>
                </address>
                <p id="footer-whatsapp" class="text-zinc-600">
                  WhatsApp: <a href="https://wa.me/96181874453" class="hover:text-pink-500">+961 81 874 453</a>
                </p>
              </div>
            </div>
            <div class="mt-20 pt-8 border-t border-zinc-100 text-center text-zinc-600">
              <p id="footer-copyright">&copy; 2025 LuxuryByJulie. Website designed with ♥ by RN Team</p>
            </div>
          </div>
        </footer>
      `
        };
    });

    // SVG Sprites Component
    Alpine.data('svgSprites', () => {
        return {
            template: `
                <svg xmlns="http://www.w3.org/2000/svg" class="hidden">
                    <!-- Shopping Bag Icon -->
                    <symbol id="icon-shopping-bag" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </symbol>
                        
                    <!-- Menu Icon -->
                    <symbol id="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16"/>
                    </symbol>
                        
                    <!-- Close Icon -->
                    <symbol id="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </symbol>
                        
                    <!-- WhatsApp Icon -->
                    <symbol id="icon-whatsapp" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </symbol>
                        
                    <!-- Arrow Up Icon -->
                    <symbol id="icon-arrow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 19V5M5 12l7-7 7 7"/>
                    </symbol>
                        
                    <!-- Plus Icon -->
                    <symbol id="icon-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </symbol>
                        
                    <!-- Minus Icon -->
                    <symbol id="icon-minus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </symbol>
                        
                    <!-- Star Icon -->
                    <symbol id="icon-star" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </symbol>
                        
                    <!-- Star Filled Icon -->
                    <symbol id="icon-star-filled" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </symbol>
                        
                    <!-- Check Icon -->
                    <symbol id="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </symbol>
                        
                    <!-- Other common icons you use across pages -->
                </svg>
          `
        };
    });

    // WhatsApp Button & Go Up Button Component
    Alpine.data('floatingButtons', () => {
        return {
            template: `
        <!-- WhatsApp Button -->
        <a href="#" id="whatsapp-button" class="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40" 
           @click.prevent="$store.ui.openWhatsApp('Hello, I have a question about your products.')" >
          <svg class="h-6 w-6">
            <use xlink:href="#icon-whatsapp"></use>
          </svg>
        </a>
        
        <!-- Go Up Button -->
        <button id="go-up-button" class="fixed bottom-6 left-6 bg-zinc-800 text-white p-4 rounded-full shadow-lg hover:bg-black transition-colors z-40" 
                x-show="scrollTop" 
                @click="$store.ui.scrollToTop()"
                x-transition:enter="transition ease-out duration-300"
                x-transition:enter-start="opacity-0 translate-y-4"
                x-transition:enter-end="opacity-100 translate-y-0"
                x-transition:leave="transition ease-in duration-300"
                x-transition:leave-start="opacity-100 translate-y-0"
                x-transition:leave-end="opacity-0 translate-y-4" >
          <svg class="h-6 w-6">
            <use xlink:href="#icon-arrow-up"></use>
          </svg>
        </button>
      `
        };
    });
});
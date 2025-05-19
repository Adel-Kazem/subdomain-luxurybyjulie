// tailwind.config.js
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'dancing': ['"Dancing Script"', 'cursive'],
                'raleway': ['Raleway', 'sans-serif'],
                'syne': ['Syne', 'sans-serif']
            },
            colors: {
                // Theme colors - Changed to true oily black
                'primary': {
                    DEFAULT: '#000000', // Pure black (main color)
                    hover: '#1a1a1a',   // Slightly lighter black (hover state)
                    light: '#111111',   // Dark gray (lighter variant)
                    focus: '#333333',   // Medium gray (focus rings)
                    50: '#f8f8f8',      // Nearly white (for backgrounds)
                    100: '#e6e6e6',     // Very light gray
                    200: '#cccccc',     // Light gray
                    300: '#b3b3b3',     // Medium-light gray
                    400: '#999999',     // Medium gray
                    500: '#808080',     // Medium-dark gray
                    600: '#666666',     // Dark gray
                    700: '#4d4d4d',     // Darker gray
                    800: '#333333',     // Very dark gray
                    900: '#1a1a1a',     // Almost black
                },
                // Accent colors remain the same
                'accent': {
                    DEFAULT: '#059669', // emerald-600 (for sale badges, etc.)
                    light: '#d1fae5',   // emerald-100
                }
            }
        }
    }
};
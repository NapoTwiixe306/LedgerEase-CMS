module.exports = {
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
    theme: {
        fontSize: {
            sm: '0.875rem',  // 14px
            base: '1rem',      // 16px
            lg: '1.125rem',    // 18px
            xl: '1.25rem',     // 20px
            '2xl': '1.5rem',   // 24px
            '3xl': '1.875rem',
        },
        extend: {},
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}
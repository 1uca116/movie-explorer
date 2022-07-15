/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                '3xl': '1920px',
            },
            colors: {
                primary: 'var(--color-primary)',
                primaryBg: 'var(--color-primaryBg)',
                'gray-dark': '#E8E8E8',
                'gray-light': '#F5F5F5',
                'green': '#2BE080',
                'navy': '#073042',

            },
            fontFamily: {
                primary: ['Inter'],
            },
        },
    },
    plugins: [],
};

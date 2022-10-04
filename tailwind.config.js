/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            primary: '#FC654A',
            secondary: '#0ABAB5',

            white: '#FFFFFF',
            black: '#000000',
            yellow: '#F4E04D',
            red: '#FF2D55',
            green: '#99DFDD',

            gray: {
                100: '#F8F8F8',
                200: '#EEEDEB',
                300: '#BEBEBC',
                400: '#989896',
                500: '#8C8C8C',
                600: '#7A7A78',
                700: '#50555C',
                800: '#323232',
                900: '#202020'
            }
        },
        extend: {
            borderWidth: {
                1: '1px'
            }
        }
    },
    plugins: []
};

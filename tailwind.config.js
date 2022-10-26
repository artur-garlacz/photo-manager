/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Open Sans', 'sans-serif']
        },
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
            width: {
                '200px': '200px',
                '300px': '300px'
            },
            minWidth: {
                20: '5rem'
            },
            borderWidth: {
                1: '1px'
            },
            flex: {
                2: '2 2 0%',
                4: '4 4 0%',
                '200px': '0 0 200px',
                '300px': '0 0 300px'
            },
            spacing: {
                '53px': '53px',
                '7vh': '7vh',
                '93vh': '93vh'
            }
        }
    },
    plugins: []
};

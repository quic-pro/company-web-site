module.exports = {
    content: ['./src/**/*.{html,jsx}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    'lg': '2rem',
                    'xl': '3rem',
                    '2xl': '6rem'
                }
            },
            colors: {
                'mainBlue': '#09a2ff', // for top bg
                'menuGray': '#000000b3', // for menu text
                'textBlue': '#3b99e0', // for headers & icons
                'bottomBlack': '#2b2f31', // for bottom
                'botBottomBlack': '#212529', // for the bottest
            },
            spacing: {
                '15': '3.75rem'
            }
        },
    },
    plugins: [],
}

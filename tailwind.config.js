module.exports = {
    content: [
        './public/**/*.html',
        './src/**/*.{js,jsx}'
    ],
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
                'companyLightGray': '#f6f6f6',
                'companyBlue': {
                    DEFAULT: '#6bbff1', // companyBlue-500
                    100: '#f1f7fc',
                    500: '#6bbff1',
                    600: '#09a2ff',
                    700: '#3b99e0',
                },
                'errorRed':
                {
                    100: '#fff4f0', // for bg
                    200: '#df0000', // for text & border 
                },
                'bottomBlack': '#2b2f31', // for bottom
                'botBottomBlack': '#212529' // for the bottest
            },
            spacing: {
                '15': '3.75rem'
            }
        },
    },
    plugins: [],
}

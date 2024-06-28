module.exports = {
    mode: 'jit',
    content: [
        "./layouts/*.html",
        "./layouts/assets/js/*.{js,jsx,ts,tsx}",
        './layouts/assets/css/*.css'
    ],
    theme: {
        extend: {
            colors: {
                regal: {
                    900:'rgba(32, 74, 126,81%)',
                    800:'#EEEEEE',
                    700:'#003773',
                    600:'#CFD5DF',
                    500:'#1C3E68',
                    400:'#F5F5F5',
                    300: '#707070',
                    200: '#013673',
                    100: '#F4D346',
                    50:'rgba(1, 54, 115,56%)',

                },
            },
            padding: {
                '140': '106px 0 132px 0',
                '105all':'3.4% 8% 4.4% 8%',
                '60':'60px',
                '75':'5.8%',
                '236':'9.9%',
            },
            height: {
                '485': '138%',
                '577':'51.2%',
                '887':'135%',
                '485f':'485px',
                '557':'86%',
                '492':'76%',
                '293':'293px',
                '515':'72.8%',
            },
            margin: {
                '190':'84.5px 0 0 0'
            },
            borderRadius: {
                '29':'29px',
                '56':'56px',
            },
            maxWidth: {
                '1150':'1150px',
                '1080':'1080px',
                '570': '570px',
                '136':'136px',
                '980':'980px',
                '340':'340px',
                '180':'180px',
                '468':'468px',
                '530':'80.7%',
                '278':'14.6%',
                '411':'21.5%',
                '3/5': '60%',
                '2/5': '40%',
                '293':'293px',
                '158':'7.7%',
                '212':'212px',
                '55':'55%',
                '45':'45%',
                '150':'150px',
                '72':'72%',
            },
            flexBasis:{
                '55':'55%',
                '45':'45%',
            },
            borderWidth:{
                '3':'3px',
            },
            zIndex: {
                'maxl': '1001',
                'max': '1000',
                '999': '999',
                '998': '998',
                'minus':'-1',
                '1':'1',
            },
            lineHeight: {
                '1/4': '1.36',
                '1/5': '1.5',
                'one':'1.1'
            }
        },
        screens: {
            'sm': '320px',
            // => @media (min-width: 576px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }

            '3xl': '1921px',
            // => @media (min-width: 1921px) { ... }
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '15px',
            '49':'49px',
            '41':'41px',
            '18':'18px',
            '20':'20px',
            '25':'25px',
            '30':'30px',
            '159':'159px',
            '97':'97px',
            '35':'35px',

        },
        fontFamily: {
            'pop':['Poppins' , 'sans serif']
        },
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
            'top-4': 'center top 1rem',
        }
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ],
}

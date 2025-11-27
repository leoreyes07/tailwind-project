/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#6028D9',
                    DEFAULT: '#4C1D95',
                    dark: '#2E1065'
                },
                secondary: {
                    light: '#34D399',
                    DEFAULT: '#059669',
                    dark: '#065F46'
                },
            },
            fontFamily: {
                sans: ['inter', 'sans-serif'],
                heading: ['Ununtu', 'sans-serif']
            },
            spacing: {
                '72': '18rem'
            },
            fontSize: {
                xxs: '0.65rem'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ]
};
import Typography from "typography"

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    googleFonts: [
        {
            name: 'Roboto',
            styles: [
                '700',
                '500'
            ]
        },
        {
            name: 'Open Sans',
            styles: [
                '600',
                '400',
                '300'
            ]
        }
    ],
    headerFontFamily: ['Roboto', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Open Sans', 'Georgia', 'serif'],
})

export const { scale, rhythm, options } = typography
export default typography

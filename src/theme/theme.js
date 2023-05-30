import { createTheme } from "@mui/material";

export const shades = {
    primary: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000"
    },
    
    secondary: {
        100: "#fdf2e8",
        200: "#fbe5d1",
        300: "#fad8bb",
        400: "#f8cba4",
        500: "#f6be8d",
        600: "#c59871",
        700: "#947255",
        800: "#624c38",
        900: "#31261c"
    },
    
    neutral: {
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#333333"
    },

    badge: {
        100: "#fffaf9",
        200: "#fff5f2",
        300: "#fff1ec",
        400: "#ffece5",
        500: "#ffe7df",
        600: "#ccb9b2",
        700: "#998b86",
        800: "#665c59",
        900: "#332e2d"
    },
    orange: {
        100: "#ffedcc",
        200: "#ffdb99",
        300: "#ffc966",
        400: "#ffb733",
        500: "#ffa500",
        600: "#cc8400",
        700: "#996300",
        800: "#664200",
        900: "#332100"
    },
}

export const theme = createTheme({
    palette: {
        primary: {
            dark: shades.primary[700],
            main: shades.primary[500]
        },
        secondary: {
            dark: shades.primary[700],
            main: shades.secondary[500],
            light: shades.secondary[100]
        },
        neutral: {
            main: shades.neutral[500]
        },
        badge: {
            main: shades.badge[100]
        }
    },
    typography: {
        fontFamily: ["Founa One", "sans-derif"].join(','),
        fontSize: 14,
        h1: {
            fontFamily: ["Founa One", "sans-derif"].join(','),
            fontSize: 48,
        },
        h2: {
            fontFamily: ["Founa One", "sans-derif"].join(','),
            fontSize: 36,
        },
        h3: {
            fontFamily: ["Founa One", "sans-derif"].join(','),
            fontSize: 20,
        },
        h4: {
            fontFamily: ["Founa One", "sans-derif"].join(','),
            fontSize: 14,
        }
    }
})


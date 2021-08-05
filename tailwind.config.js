module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            current: "currentColor",
            cyan: {
                light: "#a7faf6",
                darker: "#038f88",
            },
            red: {
                lighter: "#fac8e1",
                darker: "#ab0759",
            },
            purple: {
                primary: "#8752cc",
                dark: "#562694",
                bright: "#dc0cf7",
            },
            green: {
                primary: "#24927d",
                dark: "#146a5a",
            },
            blue: {
                primary: "#495af2",
            },
            white: {
                primary: "#f9f3f3",
            },
            black: {
                dark: "#111111",
                light: "#201f1f",
                secondary: "#232324",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

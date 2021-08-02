module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            current: "currentColor",
            purple: {
                primary: "#8752cc",
                dark: "#562694",
            },
            green: {
                primary: "#24927d",
                dark: "#146a5a",
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

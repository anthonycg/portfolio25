/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}", // App Router pages
        "./src/components/**/*.{js,ts,jsx,tsx}", // If you have components
    ],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            fontFamily: {
                pixel: ['"Press Start 2P"', "monospace"],
            },
        },
    },
    plugins: [],
};

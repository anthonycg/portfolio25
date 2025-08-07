/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}", // App Router pages
        "./src/components/**/*.{js,ts,jsx,tsx}", // If you have components
    ],
    theme: {
        extend: {
            fontFamily: {
                pixel: ['"Press Start 2P"', "monospace"],
            },
        },
    },
    plugins: [],
};

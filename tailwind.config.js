/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./views/**/*.ejs",  // Scan all EJS files in the views folder and its subfolders
        "./public/**/*.js",  // Include JavaScript files if you use Tailwind classes dynamically
    ],
    theme: {
        extend: {},  // Customize theme here if needed
    },
    plugins: [require('daisyui')],
};


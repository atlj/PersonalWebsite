module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                Programming: {
                    From: "#5182FF",
                    To: "#F4ACE4",
                },
                GraphicDesign: {
                    From: "#A276FF",
                    To: "#A276FF",
                },
                Modeling: {
                    From: "#F7C59F",
                    To: "#F285C7",
                },
            },
            fontFamily: {
                sans: ["Work Sans"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

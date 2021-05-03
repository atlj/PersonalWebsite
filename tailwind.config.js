module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                Programming: {
                    From: "#5182FF",
                    To: "#F4ACE4",
                },
                GraphicDesign: {
                    From: "#A276FF",
                    To: "#59A9F2",
                },
                Modeling: {
                    From: "#F7C59F",
                    To: "#F285C7",
                },

                Contact: {
                    From: "#654DFF",
                    To: "#C955FF",
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

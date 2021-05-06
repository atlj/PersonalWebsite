module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: "class",
    mode: "jit",
    theme: {
        extend: {
            colors: {
                dark: {
                    900: "#121212",
                    800: "#1E1E1E",
                },

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
                BackgroundGradient: {
                    From: "#FFFFFF",
                    To: "#F3F3F3",
                },

                Language: {
                    From: "#D9FAFF",
                    To: "#FBFFF2",
                },
                Theme: {
                    From: "#E9DBFF",
                    To: "#FEFCF5",
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

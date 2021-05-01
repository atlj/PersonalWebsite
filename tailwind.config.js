module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                ProgrammingFrom: "#5182FF",
                ProgrammingTo: "#F4ACE4",
                GraphicDesignFrom: "#A276FF",
                GraphicDesignTo: "#59A9F2",
                ModelingFrom: "#F7C59F",
                ModelingTo: "#F285C7",
                
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

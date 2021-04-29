// #region Global Imports
import { DefaultTheme } from "@styledinterfaces";
// #endregion Global Imports
import { common } from "./common";

const light: DefaultTheme = {
    colors: {
        ...common.colors,
        background: "linear-gradient(#fff, #F3F3F3)",
        backgroundElevated: "fff",
        textColor: "#222222",
    },
};

export { light };

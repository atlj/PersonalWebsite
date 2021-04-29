// #region Global Imports
import { DefaultTheme } from "@styledinterfaces";
// #endregion Global Imports
import { common } from "./common";

const dark: DefaultTheme = {
    colors: {
        ...common.colors,
        background: "#121212",
        backgroundElevated: "#1E1E1E",
        textColor: "#FFFFFF",
    },
};

export { dark };

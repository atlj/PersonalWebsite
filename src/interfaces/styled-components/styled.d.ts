// #region Global Imports
import "styled-components";
// #endregion Global Imports
type CommonColors =
    // | "transparent"
    // | "darkGrey"
    // | "blackGrey"
    | "white"
    | "black"
    | "gray"
    | "gradientProgramming"
    | "gradientGraphicDesign"
    | "gradient3DModeling"
    | "gradientLanguageButton"
    | "gradientThemeButton"
    | "gradientContactBox";

type ExtendedColors =
    | CommonColors
    | "background"
    | "textColor"
    | "background"
    | "backgroundElevated";
// | "toggleBorder"
// | "gradient"
// | "headerBg"
// | "cardsBg"
// | "dodgerBlue";
export interface BaseTheme {
    colors: Record<CommonColors, string>;
}

export interface DefaultTheme extends BaseTheme {
    colors: Record<ExtendedColors, string>;
}

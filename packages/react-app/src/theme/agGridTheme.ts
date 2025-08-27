import {
  themeQuartz,
  iconSetQuartzRegular,
  colorSchemeLightCold,
  colorSchemeDarkBlue,
} from "ag-grid-community";

export const baseAgGridTheme = themeQuartz.withPart(iconSetQuartzRegular);
export const lightAgGridTheme = baseAgGridTheme.withPart(colorSchemeLightCold);
export const darkAgGridTheme = baseAgGridTheme.withPart(colorSchemeDarkBlue);

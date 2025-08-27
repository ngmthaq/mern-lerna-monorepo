import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: true,
    dark: true,
  },
});

import type { FC, PropsWithChildren } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { muiTheme } from "@/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider
      noSsr
      disableTransitionOnChange
      defaultMode="light"
      theme={muiTheme}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;

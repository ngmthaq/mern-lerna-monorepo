import { useColorScheme } from "@mui/material";
import { AgGridReact, type AgGridReactProps } from "ag-grid-react";
import { useMemo, type FC } from "react";
import { useTranslation } from "react-i18next";
import { LOCALE_CONF } from "@/constants";
import { darkAgGridTheme, lightAgGridTheme } from "@/theme";

type AppAgGridProps = AgGridReactProps & {};

const AppAgGrid: FC<AppAgGridProps> = (props) => {
  const { mode } = useColorScheme();
  const { i18n } = useTranslation();

  const theme = useMemo(() => {
    if (mode === "dark") return darkAgGridTheme;
    return lightAgGridTheme;
  }, [mode]);

  const localeText = useMemo(() => {
    type Key = keyof typeof LOCALE_CONF.agGridLocaleMap;
    return LOCALE_CONF.agGridLocaleMap[i18n.language as Key] || {};
  }, [i18n.language]);

  return <AgGridReact theme={theme} localeText={localeText} {...props} />;
};

export default AppAgGrid;

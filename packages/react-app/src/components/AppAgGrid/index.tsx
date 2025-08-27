import { useColorScheme } from "@mui/material";
import { AgGridReact, type AgGridReactProps } from "ag-grid-react";
import { useMemo, type FC } from "react";
import { darkAgGridTheme, lightAgGridTheme } from "@/theme";

type AppAgGridProps = AgGridReactProps & {};

const AppAgGrid: FC<AppAgGridProps> = (props) => {
  const { mode } = useColorScheme();

  const theme = useMemo(() => {
    if (mode === "dark") return darkAgGridTheme;
    return lightAgGridTheme;
  }, [mode]);

  return <AgGridReact {...props} theme={theme} />;
};

export default AppAgGrid;

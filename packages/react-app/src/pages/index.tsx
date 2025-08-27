import { Box, Button, Typography, useColorScheme } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Plot from "react-plotly.js";
import { AppAgGrid } from "@/components";
import { DAYJS_FORMATS } from "@/constants";
import { dayjs } from "@/utils";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t, i18n } = useTranslation();
  const { mode, setMode } = useColorScheme();

  const [rowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  const [colDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  const handleChangeLanguage = () => {
    if (i18n.language === "en") i18n.changeLanguage("vi");
    else i18n.changeLanguage("en");
  };

  const handleChangeThemeMode = () => {
    if (mode === "light") setMode("dark");
    else setMode("light");
  };

  return (
    <Box>
      <Typography>{dayjs().format(DAYJS_FORMATS.fullDateTime)}</Typography>
      <Typography mb={1}>{t("welcome")}</Typography>
      <Box mb={1}>
        <Button
          type="button"
          variant="contained"
          onClick={handleChangeLanguage}
        >
          {t("changeLanguage")}
        </Button>
      </Box>
      <Box mb={1}>
        <Button
          type="button"
          variant="contained"
          onClick={handleChangeThemeMode}
        >
          {t("changeTheme")}
        </Button>
      </Box>
      <Box sx={{ height: 500 }}>
        <AppAgGrid rowData={rowData} columnDefs={colDefs} />
      </Box>
      <Box>
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
            { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{ width: 320, height: 240, title: { text: "A Fancy Plot" } }}
        />
      </Box>
    </Box>
  );
}

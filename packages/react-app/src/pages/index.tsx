import { Box, Button, Typography, useColorScheme } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t, i18n } = useTranslation();
  const { mode, setMode } = useColorScheme();

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
    </Box>
  );
}

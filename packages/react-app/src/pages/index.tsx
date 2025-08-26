import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => {
    if (i18n.language === "en") i18n.changeLanguage("vi");
    else i18n.changeLanguage("en");
  };

  return (
    <div>
      <div>{t("welcome")}</div>
      <button
        type="button"
        title="changeLanguage"
        onClick={handleChangeLanguage}
      >
        {t("changeLanguage")}
      </button>
    </div>
  );
}

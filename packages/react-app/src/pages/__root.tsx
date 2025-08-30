import type { Branding } from "@toolpad/core/AppProvider";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { TanStackRouterAppProvider } from "@toolpad/core/tanstack-router";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { LOCALE_CONF, TOOLPAD_NAVIGATION } from "@/constants";
import { useHelmet } from "@/hooks";
import { muiTheme } from "@/theme";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { title, icon } = useHelmet();
  const { t, i18n } = useTranslation();

  const branding: Branding = useMemo(() => {
    return {
      logo: <img src={icon} alt={title} />,
      title: title,
    };
  }, [title, icon]);

  const locale = useMemo(() => {
    type Key = keyof typeof LOCALE_CONF.toolpadLocaleMap;
    return LOCALE_CONF.toolpadLocaleMap[i18n.language as Key];
  }, [i18n.language]);

  const navigation = useMemo(() => {
    return TOOLPAD_NAVIGATION.map((nav) => {
      if ("title" in nav) nav = { ...nav, title: t(nav.title as never) };
      if ("icon" in nav) nav = { ...nav, icon: <nav.icon /> };
      return nav;
    });
  }, [t]);

  return (
    <TanStackRouterAppProvider
      theme={muiTheme}
      branding={branding}
      navigation={navigation}
      localeText={locale}
    >
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </TanStackRouterAppProvider>
  );
}

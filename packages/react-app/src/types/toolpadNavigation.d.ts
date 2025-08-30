import type { TranslationKeys } from "./i18next";
import type { SvgIconComponent } from "@mui/icons-material";
import type {
  NavigationPageItem,
  NavigationSubheaderItem,
  NavigationDividerItem,
} from "@toolpad/core/AppProvider";

export type ToolpadNavigationPageItem = Omit<
  NavigationPageItem,
  "title" | "icon"
> & {
  title?: TranslationKeys;
  icon?: typeof SvgIconComponent;
};

export type ToolpadNavigationItem =
  | ToolpadNavigationPageItem
  | NavigationSubheaderItem
  | NavigationDividerItem;

export type ToolpadNavigation = ToolpadNavigationItem[];

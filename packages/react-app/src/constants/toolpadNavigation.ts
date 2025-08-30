import type { ToolpadNavigation } from "@/types/toolpadNavigation";
import { Dashboard } from "@mui/icons-material";
import { createNavigationItem } from "@/utils";

export const TOOLPAD_NAVIGATION: ToolpadNavigation = [
  createNavigationItem({
    segment: "dashboard",
    title: "sidebar.dashboard",
    icon: Dashboard,
  }),
];

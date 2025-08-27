import type { FC, PropsWithChildren } from "react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const AgGridProvider: FC<PropsWithChildren> = ({ children }) => {
  return children;
};

export default AgGridProvider;

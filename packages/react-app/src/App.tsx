import type { FC } from "react";
import { RouterProvider } from "@tanstack/react-router";
import { AppError, AppNotFound } from "./components";
import {
  AgGridProvider,
  HelmetProvider,
  I18nProvider,
  JotaiProvider,
  MuiThemeProvider,
  ReactQueryProvider,
} from "./providers";
import router from "./router";

const App: FC = () => {
  return (
    <I18nProvider>
      <MuiThemeProvider>
        <AgGridProvider>
          <HelmetProvider>
            <JotaiProvider>
              <ReactQueryProvider>
                <RouterProvider
                  router={router}
                  defaultErrorComponent={AppError}
                  defaultNotFoundComponent={AppNotFound}
                />
              </ReactQueryProvider>
            </JotaiProvider>
          </HelmetProvider>
        </AgGridProvider>
      </MuiThemeProvider>
    </I18nProvider>
  );
};

export default App;

import type { FC } from "react";
import {
  AgGridProvider,
  HelmetProvider,
  I18nProvider,
  JotaiProvider,
  MuiThemeProvider,
  ReactQueryProvider,
  ReactRouterProvider,
} from "./providers";

const App: FC = () => {
  return (
    <I18nProvider>
      <MuiThemeProvider>
        <AgGridProvider>
          <HelmetProvider>
            <JotaiProvider>
              <ReactQueryProvider>
                <ReactRouterProvider />
              </ReactQueryProvider>
            </JotaiProvider>
          </HelmetProvider>
        </AgGridProvider>
      </MuiThemeProvider>
    </I18nProvider>
  );
};

export default App;

import type { FC } from "react";
import {
  AgGridProvider,
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
          <JotaiProvider>
            <ReactQueryProvider>
              <ReactRouterProvider />
            </ReactQueryProvider>
          </JotaiProvider>
        </AgGridProvider>
      </MuiThemeProvider>
    </I18nProvider>
  );
};

export default App;

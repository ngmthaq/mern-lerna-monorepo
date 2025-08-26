import type { FC } from "react";
import {
  I18nProvider,
  JotaiProvider,
  MuiThemeProvider,
  ReactQueryProvider,
  ReactRouterProvider,
} from "./providers";

const App: FC = () => {
  return (
    <I18nProvider>
      <JotaiProvider>
        <MuiThemeProvider>
          <ReactQueryProvider>
            <ReactRouterProvider />
          </ReactQueryProvider>
        </MuiThemeProvider>
      </JotaiProvider>
    </I18nProvider>
  );
};

export default App;

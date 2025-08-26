import type { FC } from "react";
import {
  I18nProvider,
  JotaiProvider,
  ReactQueryProvider,
  ReactRouterProvider,
} from "./providers";

const App: FC = () => {
  return (
    <I18nProvider>
      <JotaiProvider>
        <ReactQueryProvider>
          <ReactRouterProvider />
        </ReactQueryProvider>
      </JotaiProvider>
    </I18nProvider>
  );
};

export default App;

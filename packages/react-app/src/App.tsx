import type { FC } from "react";
import {
  JotaiProvider,
  ReactQueryProvider,
  ReactRouterProvider,
} from "./providers";

const App: FC = () => {
  return (
    <JotaiProvider>
      <ReactQueryProvider>
        <ReactRouterProvider />
      </ReactQueryProvider>
    </JotaiProvider>
  );
};

export default App;

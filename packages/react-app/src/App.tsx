import type { FC } from "react";
import { ReactQueryProvider, ReactRouterProvider } from "./providers";

const App: FC = () => {
  return (
    <ReactQueryProvider>
      <ReactRouterProvider />
    </ReactQueryProvider>
  );
};

export default App;

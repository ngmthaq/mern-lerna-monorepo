import "jotai-devtools/styles.css";
import "./JotaiProvider.css";
import type { FC, PropsWithChildren } from "react";
import { createStore, Provider } from "jotai";
import { DevTools } from "jotai-devtools";

const store = createStore();

const JotaiProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <DevTools store={store} />
      {children}
    </Provider>
  );
};

export default JotaiProvider;

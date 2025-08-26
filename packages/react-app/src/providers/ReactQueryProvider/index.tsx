import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import classNames from "classnames";
import { Fragment, useState, type FC, type PropsWithChildren } from "react";
import classes from "./ReactQueryProvider.module.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 5,
      refetchOnWindowFocus: false,
    },
  },
});

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpenDevtools, setIsOpenDevtools] = useState(false);

  const handleToggleDevtools = () => {
    setIsOpenDevtools((prev) => !prev);
  };

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {import.meta.env.DEV && (
        <Fragment>
          <button
            type="button"
            title="Open React Query Devtool"
            className={classes.reactQueryProviderDevtoolButton}
            onClick={handleToggleDevtools}
          >
            TanStack Query
          </button>
          <div
            className={classNames([
              classes.reactQueryDevtoolsPanelWrapper,
              {
                [classes.reactQueryDevtoolsPanelWrapperClosed]: !isOpenDevtools,
              },
            ])}
          >
            <button
              type="button"
              title="Close React Query Devtool"
              className={classes.closeReactQueryProviderDevtoolButton}
              onClick={handleToggleDevtools}
            >
              x
            </button>
            <ReactQueryDevtoolsPanel onClose={handleToggleDevtools} />
          </div>
        </Fragment>
      )}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;

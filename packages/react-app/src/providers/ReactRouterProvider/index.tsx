import { RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Fragment, type FC } from "react";
import { AppError, AppNotFound } from "@/components";
import router from "@/router";

const ReactRouterProvider: FC = () => {
  return (
    <Fragment>
      <RouterProvider
        router={router}
        defaultErrorComponent={AppError}
        defaultNotFoundComponent={AppNotFound}
      />
      <TanStackRouterDevtools router={router} />
    </Fragment>
  );
};

export default ReactRouterProvider;

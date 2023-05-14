
import { Footer, Navigation } from "@/components/common";
import * as ROUTES from "@/constants/routes";
import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import * as pages from "@/pages";
import PublicRoute from "./PublicRoute";

// Revert back to history v4.10.0 because
// v5.0 breaks navigation
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <>
      <Navigation />
      <Switch>
        <Route component={pages.Home} exact path={ROUTES.HOME} />
        <Route
          component={pages.ProductDetails}
          exact
          path={ROUTES.PRODUCT_DETAILS}
        />
        <Route component={pages.ProductGrid} exact path={ROUTES.PRODUCT_GRID} />
        <PublicRoute component={pages.PageNotFound} />
      </Switch>
      <Footer />
    </>
  </Router>
);

export default AppRouter;

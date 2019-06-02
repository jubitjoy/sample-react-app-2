import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import SC from "./container/sc/SCContainer";
import About from "./components/about/About";

const BasicRouter = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path={"/"} exact render={() => <SC />} />
        <Route path={"/about"} render={() => <About />} />
      </Switch>
    </Layout>
  </Router>
);

export default BasicRouter;

import React from "react";

import { Router, Route, Switch } from "react-router-dom";


import { createBrowserHistory } from "history";
import Header from "../components/header/header";
import LandingPage from "../components/home/home";
import Gig from "../components/gig/gig";
import Internship from "../components/internship/internship";
import PageNotFound from "../components/error/pageNotFound";
import Marketing from '../components/marketing/marketing';
import BoostYourInternship from '../components/boostYourInternship/boostYourInternship';
import Help from '../components/help/help';

const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <Header></Header>
      <Switch>
        <Route path="/" component={LandingPage} exact={true}></Route>
        <Route path="/internship" component={Internship} exact={true} />
        <Route path="/gig" component={Gig} exact={true} />
        <Route path="/marketing" component={Marketing} exact={true} />
        <Route path="/help" component={BoostYourInternship} exact={true} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

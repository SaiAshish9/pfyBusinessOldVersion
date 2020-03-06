import React from "react";

import { Router, Route, Switch } from "react-router-dom";


import { createBrowserHistory } from "history";
import Header from "../components/header/header";
import LandingPage from "../components/home/home";
import Gig from "../components/gig/gig";
import Internship from "../components/internship/internship";
import PageNotFound from "../components/error/pageNotFound";
import Marketing from '../components/newComp/marketing/marketing';
import BoostYourInternship from '../components/newComp/boostYourInternship/boostYourInternship';
import Help from '../components/newComp/help/help';
import ReportApplicant from '../components/newComp/reportApplicant/reportApplicant';
import InternshipStatus from '../components/newComp/internshipStatus/internshipStatus';
import ShareInternship from '../components/newComp/shareInternship/shareInternship'

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
        <Route path="/testing" component={ShareInternship} exact={true} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

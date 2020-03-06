import React from "react";

import { Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";
import Header from "../components/header/header";
import LandingPage from "../components/home/home";
import Gig from "../components/gig/gig";
import Internship from "../components/internship/internship/internship";
import PageNotFound from "../components/error/pageNotFound";
import InternshipForm from '../components/internship/internshipForm/internshipForm'

import UserResume from '../components/independentComponent/userResume';

const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <Header></Header>
      <Switch>
        <Route path="/" component={LandingPage} exact={true}></Route>
        <Route path="/internship" component={Internship} exact={true} />
        <Route path="/internship/form" component={InternshipForm} exact={true} />
        <Route path="/user-resume" component={UserResume} exact={true} />
        <Route path="/gig" component={Gig} exact={true} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

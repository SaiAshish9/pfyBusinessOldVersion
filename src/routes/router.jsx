import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import NewCampusMarketing from "../components/campasMarketing/marketing/newMarketing";
import StudentOffers from "../components/campasMarketing/marketing/studentOffers";
// -------------------------------- ******** -------------------------------- */
import LandingPage from "../components/beforeLogin/landingPage/landingPage.js";
import Dashboard from "../components/dashboard/dashboard";
import EditProfile from "../components/editProfile/editProfile";
import PageNotFound from "../components/error/pageNotFound";
import CampaignCustom from "../components/gig/campaignCustom";
import Gig from "../components/gig/gig";
import NewAppliedGig from "../components/gig/newAppliedGig";
import Internship2 from "../components/internship/internship/internship2";
import NewInternshipDetails from "../components/internship/internship/newInternshipDetails";
import NewCreateInternship from "../components/internship/internshipForm/newCreateInternship";
// import ContactUs from "../components/landingPageContactUs/contactUs";
import Login from "../components/beforeLogin/loginOrSignUp/login";
import SignUp from "../components/beforeLogin/loginOrSignUp/signUp";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <Switch>
        {/*//! ----------------Public Route----------------- */}
        <PublicRoute
          path="/"
          component={LandingPage}
          exact={true}
        ></PublicRoute>

        <PublicRoute path="/login" component={Login} exact={true} />
        <PublicRoute path="/register" component={SignUp} exact={true} />

        {/*//! ----------------Private Route----------------- */}
        <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
        <PrivateRoute path="/internship" component={Internship2} exact={true} />
        <PrivateRoute
          path="/internship/:internshipId"
          component={NewInternshipDetails}
          exact={true}
        />
        <PrivateRoute path="/gigs" component={Gig} exact={true} />
        <PrivateRoute
          path="/create-campaign/:category/:campaignTitle"
          component={CampaignCustom}
          exact={true}
        />

        <PrivateRoute
          path="/campus-marketing"
          component={NewCampusMarketing}
          exact={true}
        />
        <PrivateRoute path="/gigs/:id" component={NewAppliedGig} exact={true} />
        <PrivateRoute
          path="/student-offer"
          component={StudentOffers}
          exact={true}
        />
        <PrivateRoute
          path="/edit-profile"
          component={EditProfile}
          exact={true}
        />

        <PublicRoute component={PageNotFound} />
      </Switch>
    </Router>
  );
}

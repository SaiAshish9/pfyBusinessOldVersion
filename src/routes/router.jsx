import { createBrowserHistory } from "history";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
// -------------------------------- ******** -------------------------------- */
import Dashboard from "../components/dashboard/dashboard";
import PageNotFound from "../components/error/pageNotFound";
import Gig from "../components/gig/gig";
import OldLandingPage from "../components/home/home";
import LandingPage from "../components/landingPage/landingPage";
import UserResume from "../components/independentComponent/userResume";
import Internship from "../components/internship/internship/internship";
// import Internship2 from "../components/internship/oldDesign/internship/internship/internship";
// import InternshipForm from "../components/internship/oldDesign/internshipForm/internshipForm";
import InternshipStatus from "../components/newComp/internshipStatus/internshipStatus";
import Marketing from "../components/newComp/marketing/marketing";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import SpecificGig from "../components/gig/specificGig";
import CampaignCustom from "../components/gig/campaignCustom";
import CampusMarketing from "../components/campasMarketing/marketing/marketing";
import InternshipDetails from "../components/internship/internship/internshipDetails";
import NewInternshipDetails from "../components/internship/internship/newInternshipDetails";
// import SpecificGig from "../components/gig/specificGig";
import NewCampusMarketing from "../components/campasMarketing/marketing/newMarketing";
import StudentOffers from "../components/campasMarketing/marketing/studentOffers";
// import StudentOffer from "../components/studentOffer/studentOffer";
import EditProfile from "../components/editProfile/editProfile";
import Login from "../components/loginOrSignUp/login";
import SignUp from "../components/loginOrSignUp/signUp";
import NewCreateInternship from '../components/internship/internshipForm/newCreateInternship';
import Internship2 from '../components/internship/internship/internship2';

const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <Switch>
        {/*//! ----------------Public Route----------------- */}
        <PublicRoute
          path="/"
          component={OldLandingPage}
          exact={true}
        ></PublicRoute>
        <PublicRoute
          path="/landingPage"
          component={LandingPage}
          exact={true}
        ></PublicRoute>
        <PublicRoute
          path="/user-resume/:userId"
          component={UserResume}
          exact={true}
        />
        <PublicRoute path="/marketing" component={Marketing} exact={true} />
        {/* <PrivateRoute path="/campus-marketing" component={CampusMarketing} exact={true} /> */}
        <Route
          path="/testing"
          component={NewCreateInternship}
          exact={true}
        />
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
          path="/create-campaign/:campaignTitle"
          component={CampaignCustom}
          exact={true}
        />
        {/* <PrivateRoute
          path="/application/:id"
          component={GigApplication}
          exact={true}
        /> */}

        <PrivateRoute
          path="/campus-marketing"
          component={NewCampusMarketing}
          exact={true}
        />
        <PrivateRoute
          path="/specific-gig/:id"
          component={SpecificGig}
          exact={true}
        />
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

import { createBrowserHistory } from "history";
import React from "react";
import { Router, Switch } from "react-router-dom";
// -------------------------------- ******** -------------------------------- */
import CompanyHome from "../components/companyHome/companyHome";
import PageNotFound from "../components/error/pageNotFound";
import Gig from "../components/gig/gig";
import LandingPage from "../components/home/home";
import UserResume from "../components/independentComponent/userResume";
import Internship from "../components/internship/internship/internship";
// import Internship2 from "../components/internship/oldDesign/internship/internship/internship";
// import InternshipForm from "../components/internship/oldDesign/internshipForm/internshipForm";
import InternshipStatus from "../components/newComp/internshipStatus/internshipStatus";
import Marketing from "../components/newComp/marketing/marketing";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import SpecificGig from "../components/gig/specificGig";
import CampusMarketing from "../components/campasMarketing/marketing/marketing";
import StudentOffer from "../components/studentOffer/studentOffer";
import EditProfile from "../components/editProfile/editProfile";

const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute
          path="/"
          component={LandingPage}
          exact={true}
        ></PublicRoute>
        <PublicRoute
          path="/user-resume/:userId"
          component={UserResume}
          exact={true}
        />
        {/* <PublicRoute path="/gig" component={Gig} exact={true} /> */}
        <PublicRoute path="/marketing" component={Marketing} exact={true} />
        <PublicRoute
          path="/testing"
          component={InternshipStatus}
          exact={true}
        />
        <PrivateRoute path="/home" component={CompanyHome} exact={true} />
        <PrivateRoute path="/internship" component={Internship} exact={true} />
        {/* <PrivateRoute path="/internship/form" component={InternshipForm} exact={true} */}
        />
        <PrivateRoute
          path="/internship/:internship_id"
          component={InternshipStatus}
          exact={true}
        />
        <PrivateRoute path="/gigs" component={Gig} exact={true} />
        <PrivateRoute
          path="/campus-marketing"
          component={CampusMarketing}
          exact={true}
        />
        <PrivateRoute
          path="/specific-gig/:id"
          component={SpecificGig}
          exact={true}
        />
        <PrivateRoute
          path="/student-offer"
          component={StudentOffer}
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

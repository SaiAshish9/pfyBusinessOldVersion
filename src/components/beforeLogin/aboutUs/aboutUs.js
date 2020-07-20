import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import businessImg from "../../../assets/img/aboutUs/businessImg.svg";
import gigWorkerImg from "../../../assets/img/aboutUs/gigWorkerImg.svg";
import youngWorker from "../../../assets/img/aboutUs/youngWorker.svg";
import {useMediaQuery} from 'react-responsive';
import DesktopView from "./desktopView"
import MobileView from "./mobileView"

const about = [
  {
    head:
      "Pracify - Building India's youngest & strongest on-demand workforce!",
    paraOne:
      "Pracify helps companies to scale using our network of on-demand workers comprising of India's youth who  are paid on a 'pay-per-performance' system.",
    paraTwo:
      "With Pracify, companies can achieve their business goals in a cost-effective manner by onboarding on-demand workers for various tasks.",
    img: youngWorker,
  },
  {
    head: "Pracify for Business",
    paraOne:
      "Pracify helps mitigate traditional hiring risks with its 'outcome-based payout' feature where companies pay only for the work they approve and not manpower employed.",
    paraTwo:
      "Our company dashboard acts as a recruitment engine, enables tracking of work & allowsw payment disbursal platform. You can also opt for our managed services for guaranteed delivery of outcome.",
    button: "Get Pracified",
    img: businessImg,
  },
  {
    head: "Pracify for Gig Workers",
    paraOne:
      "Pracify helps college students & young adults who haven't entered the professional world yet to earn experience and money by working for their favourite companies",
    paraTwo:
      "You have the choice of selecting gigs according to your own skills and interests which can be performed on your own schedule.Your earnings are directly transferred into your Pracify wallet which can be easily redeemed to your Paytm or bank account.",
    button: "Get Pracified",
    img: gigWorkerImg,
  },
];
export default function AboutUs() {

  
  const media=useMediaQuery({
    query:'(min-width:600px)'
  })

  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      {media ? (
        <DesktopView about={about} history={history} />
      ) : (
        <MobileView about={about} history={history} />
      )}
    </React.Fragment>
  );
}

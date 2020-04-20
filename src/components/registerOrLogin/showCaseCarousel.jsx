import React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import carouselAchieveOne from "../../assets/img/loginOrRegister/carouselAchieveOne.svg";
import carouselPayTwo from "../../assets/img/loginOrRegister/carouselPayTwo.svg";
import carouselRecruitThree from "../../assets/img/loginOrRegister/carouselRecruitThree.svg";
import carouselTrackFour from "../../assets/img/loginOrRegister/carouselTrackFour.svg";
import carouselEnjoyFive from "../../assets/img/loginOrRegister/carouselEnjoyFive.svg";

export default function ShowCaseCarousel() {
  const thumbnails = [
    <svg height="10" width="10">
      {" "}
      <circle cx="5" cy="5" r="4" stroke="black" stroke-width="3" fill="red" />
    </svg>,
    <svg height="10" width="10">
      {" "}
      <circle cx="5" cy="5" r="4" stroke="black" stroke-width="3" fill="red" />
    </svg>,
    <svg height="10" width="10">
      {" "}
      <circle cx="5" cy="5" r="4" stroke="black" stroke-width="3" fill="red" />
    </svg>,
    <svg height="10" width="10">
      {" "}
      <circle cx="5" cy="5" r="4" stroke="black" stroke-width="3" fill="red" />
    </svg>,
  ];
  return (
    <div className="">
      <Carousel
        arrows
        infinite
        autoPlay={5000}
        animationSpeed={1000}
        dots
        // centered={true}
      >
        <div className="">
          <img src={carouselAchieveOne} alt="" />
          <h1 className=""> Achieve business goals using Pracify</h1>
          <p className="">
            Harness the power of on demand workers for your business by creating
            gigs on Pracify.
          </p>
        </div>
        <div className="">
          <img src={carouselPayTwo} alt="" />
          <h1 className="">Pay for outcome, not manpower</h1>
          <p className="">
            Pay only for the work you approve and not for manpower employed to
            ensure.
          </p>
        </div>
        <div className="">
          <img src={carouselRecruitThree} alt="" />
          <h1 className=""> Recruiting made easier with Pracify</h1>
          <p className="">
            Our recruitment engine makes sourcing on demand workers easy for
            your brand. Hire workers that match your requirements in a single
            click.
          </p>
        </div>
        <div className="">
          <img src={carouselTrackFour} alt="" />
          <h1 className="">Track performance in real time!</h1>
          <p className="">
            Track performance of on-demand workers in real time on nor dashboard
            24x7.
          </p>
        </div>
        <div className="">
          <img src={carouselEnjoyFive} alt="" />
          <h1 className="">Enjoy a stress free experience</h1>
          <p className="">
            Opt for our managed service for assured delivery & guarantee of work
            completion.
          </p>
        </div>
      </Carousel>
    </div>
  );
}

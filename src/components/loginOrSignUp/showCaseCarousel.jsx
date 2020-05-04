import React, { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import carouselAchieveOne from "../../assets/img/loginOrSignUp/carouselAchieveOne.svg";
import carouselPayTwo from "../../assets/img/loginOrSignUp/carouselPayTwo.svg";
import carouselRecruitThree from "../../assets/img/loginOrSignUp/carouselRecruitThree.svg";
import carouselTrackFour from "../../assets/img/loginOrSignUp/carouselTrackFour.svg";
import carouselEnjoyFive from "../../assets/img/loginOrSignUp/carouselEnjoyFive.svg";
import arrowLeft from "../../assets/img/arrowLeft.svg";
import arrowRight from "../../assets/img/arrowRight.svg";

const carouselContent = [
  {
    img: carouselAchieveOne,
    heading: "Achieve business goals using Pracify",
    para:
      "Harness the power of on demand workers for your business by creating gigs on Pracify.",
  },
  {
    img: carouselPayTwo,
    heading: "Pay for outcome, not manpower",
    para:
      "Pay only for the work you approve and not for manpower employed to ensure.",
  },
  {
    img: carouselRecruitThree,
    heading: "Recruiting made easier with Pracify",
    para:
      "Our recruitment engine makes sourcing on demand workers easy for your brand. Hire workers that match your requirements in a single click.",
  },
  {
    img: carouselTrackFour,
    heading: "Track performance in real time!",
    para:
      "Track performance of on-demand workers in real time on nor dashboard 24x7.",
  },
  {
    img: carouselEnjoyFive,
    heading: "Enjoy a stress free experience",
    para:
      "Opt for our managed service for assured delivery & guarantee of work completion.",
  },
];

export default function ShowCaseCarousel() {
  const [value, setValue] = useState(0);
  const [carousel, setCarousel] = useState({
    slides: carouselContent.map((carouselContent, index) => (
      <div key={index} className="showcase-carousel-block">
        <h1 className="carousel__heading">{carouselContent.heading}</h1>
        <p className="carousel__para">{carouselContent.para}</p>
        <img src={carouselContent.img} alt="" className="carousel__img" />
      </div>
    )),

    thumbnails: [1, 2, 3, 4, 5].map((ele, index) => (
      <svg key={index} height="10" width="10">
        <circle cx="5" cy="5" r="5" fill="#00bfa6" />
      </svg>
    )),
  });

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div className="showcase-carousel-main-block">
      <Carousel
        arrowLeft={
          <img src={arrowLeft} alt="" className="carousel__left-arrow" />
        }
        arrowRight={
          <img src={arrowRight} alt="" className="carousel__right-arrow" />
        }
        addArrowClickHandler
        infinite
        autoPlay={5000}
        animationSpeed={1000}
        value={value}
        slides={carousel.slides}
        onChange={onChange}
      />
      <Dots
        number={5}
        thumbnails={carousel.thumbnails}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

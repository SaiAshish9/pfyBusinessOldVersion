import React from "react";
import Image from "../../assets/img/loader.png";
export default function Loader() {
  return (
    <div class="loader">
      <img className="loader__logo" src={Image} alt="loader" />
    </div>
  );
}

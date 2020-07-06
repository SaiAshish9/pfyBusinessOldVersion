import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import "./index.css";
import "antd/dist/antd.css";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import Aos from "aos";
import { useMediaQuery } from "react-responsive";
const Desktop = lazy(() => import("./containers/desktop"));
const Mobile = lazy(() => import("./containers/mobile"));

function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  const mediaSIze = useMediaQuery({
    query: "(min-width:1000px)",
  });

  return (
    <Suspense fallback={<div style={{ height: "1000px" }}></div>}>
      {mediaSIze ? <Desktop /> : <Mobile />}
    </Suspense>
  );
}

export default LandingPage;

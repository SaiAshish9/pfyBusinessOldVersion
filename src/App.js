import "antd/dist/antd.css";
import React, { useEffect } from "react";
import AppRouter from "./routes/router.jsx";

import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import Aos from "aos";

import "./styles/_style.scss";

function App() {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  return <AppRouter></AppRouter>;
}

export default App;

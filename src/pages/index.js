import * as React from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/300-italic.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";

import Header from "../views/Header";
import Services from "../views/Sections/Services";
import Portfolio from "../views/Sections/Portfolio"

import '../styles/global.scss';

const IndexPage = () => {
  return (
    <>
      <div id="TOP">
        <Header />
      </div>
      <Services />
      <Portfolio />
    </>
    
  )
}

export default IndexPage

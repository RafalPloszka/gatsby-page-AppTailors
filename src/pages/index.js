import * as React from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";

import Navbar from "../views/Navbar";
import Header from "../views/Header";
import Services from "../views/Sections/Services";
import Portfolio from "../views/Sections/Portfolio"
import SEO from '../components/SEO';

import '../styles/global.scss';

const links = [
  { to: "Services", name: "Services"},
  { to: "Portfolio", name: "Featured projects" },
  { to: "/", name: "About"},
  { to: "/", name: "Values" },
  { to: "/", name: "Blog" },
];
const keywords = "AppTailors, iOS Development, Android Development, Flutter Development, Mobile Agency, Consulting Agency, Software House, Mobile App, Mobile Application, Software Development Agency"
const description = "Apptailors specializes in the development of mobile and web applications. Our team takes care of your project by creating of the architecture, preparing the design and developing the application."

const IndexPage = () => {
  return (
    <>
      <SEO title="AppTailors" keywords={keywords} description={description} />
      <Navbar links={links} />
      <div id="TOP">
        <Header />
      </div>
      <Services />
      <Portfolio />
    </>
    
  )
}

export default IndexPage

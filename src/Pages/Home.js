import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import AboutMe from '../Components/AboutMe/AboutMe';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';
import ContactMe from '../Components/ContactMe/ContactMe'
import Footer from '../Components/Footer/Footer'
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          id="app"
          title="Hello, I'm Ritik Vashistha"
          subtitle="And I am a Photographer"
        >
          <Link to="/hotels/rooms" className="btn-primary">
            View More
          </Link>
        </Banner>
      </Hero>
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
      {/* <Footer /> */}
    </>
  );
};

export default home;

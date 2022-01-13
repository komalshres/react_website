import React from "react";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Work from "./Components/Header/Work";
import Services from "./Components/Services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Work />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;

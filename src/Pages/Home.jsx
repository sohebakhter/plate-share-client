import React from "react";
import Banner from "../Components/Banner";
import HowItWorks from "../Components/HowItWorks";
import OurMission from "../Components/OurMission";
import FeaturedFoods from "../Components/FeaturedFoods";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
      <HowItWorks></HowItWorks>
      <OurMission></OurMission>
    </div>
  );
};

export default Home;

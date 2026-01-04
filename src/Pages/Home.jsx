import React from "react";
import Banner from "../Components/Banner";
import HowItWorks from "../Components/HowItWorks";
import OurMission from "../Components/OurMission";
import FeaturedFoods from "../Components/FeaturedFoods";
import Statistics from "../Components/Statistics";
import Testimonials from "../Components/Testimonials";
import WhyChooseUs from "../Components/WhyChooseUs";
import CallToAction from "../Components/CallToAction";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <FeaturedFoods></FeaturedFoods>
      <HowItWorks></HowItWorks>
      <OurMission></OurMission>
      <Statistics></Statistics>
      <Testimonials></Testimonials>
      <WhyChooseUs></WhyChooseUs>
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;

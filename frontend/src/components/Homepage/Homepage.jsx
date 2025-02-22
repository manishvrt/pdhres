"use client";
import React from "react";
import Hero from "./Hero";
import Research from "./Research";
import VideoSec from "./VideoSec";
import Package from "./Package/Package";
import QualiQuiz from "./QualiQuiz";
import Testimonial from "./Testimonial/Testimonial";
import FAQ from "./FAQ";
import Footrex from "./Footrex";
import DynamicNavbar from "./DynamicNav";
import { useEffect, useState } from "react";
import Stats from "./Stats/Stats";
import UserCTA from "./UserCTA";

const useGeolocation = () => {
  // const [country, setCountry] = useState(null);
  // useEffect(() => {
  //   fetch('https://ipinfo.io/json?token=4b43ffd1872220') // Replace with your actual token
  //     .then(response => response.json())
  //     .then(data => setCountry(data.country));
  // }, []);
  // return country;
};
const Homepage = () => {
  // const country = useGeolocation();

  // if (country && country !== 'US' && country !== 'CA' && country !== 'MX' && country !== 'MX') {
  //   window.location.href = '/restricted'; // Redirect to a restricted access page
  //   return null; // Render nothing until the redirection happens
  // }
  return (
    <div>
      <DynamicNavbar />
      <Hero />
      <Research />
      <Stats />
      <VideoSec />
      <Package />
      <UserCTA/>
      {/* <VMessage/> */}
      {/* <Groport/> */}
      <QualiQuiz />

      <Testimonial />

      <FAQ />
      <Footrex />
    </div>
  );
};

export default Homepage;

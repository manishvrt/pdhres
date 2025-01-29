import Image from "next/image";
import Hero from "@/components/Homepage/Hero";
import QualiQuiz from "@/components/Homepage/QualiQuiz";
import VideoSec from "@/components/Homepage/VideoSec";
import Package from "@/components/Homepage/Package/Package";
import Testimonial from "@/components/Homepage/Testimonial/Testimonial";
import FAQ from "@/components/Homepage/FAQ";
import Footer from "@/components/Homepage/Footer";
import Footrex from "@/components/Homepage/Footrex";
import Groport from "@/components/Homepage/Groport";
import VMessage from "@/components/Homepage/VMessage";
import Research from "@/components/Homepage/Research";
export default function Home() {
  return (
    <>
    <Hero/>
    <Research/>
    <VideoSec/>
    <Package/>
      {/* <VMessage/> */}
      {/* <Groport/> */}
      <QualiQuiz/>
     
      
      <Testimonial/>
     
      <FAQ/>
      <Footrex/>

    </>
  );
}

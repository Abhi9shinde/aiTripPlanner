import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import Footer from "@/view-trip/components/Footer";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mx-56 gap-9 ">
        <h1 className="font-extrabold text-[50px] text-center mt-16">
          <span className="text-[#f56551]">
            Discover Your Next Adventure with AI:
          </span>
          <br />
          Personalized Itineraries at Your Fingertips
        </h1>
        <p className="text-xl text-gray-500 text-center">
          Your personal trip planner and travel curator, creating custom
          iternaries tailored to your interest and budget
        </p>
        <Link to={"/create-trip"}>
          <Button variant="dark" className="p-5 font-light">
            Get Started for Free<span className="text-xl">✨</span>
          </Button>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <br />
      <ImageSlider />
      <Footer />
    </>
  );
}

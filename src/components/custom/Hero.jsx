import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
          <Button variant="dark" className="p-5">
            Get Started for Free
          </Button>
        </Link>
      </div>
    </>
  );
}

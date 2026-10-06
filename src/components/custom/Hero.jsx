import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mx-56 gap-9 ">
        <motion.h1
          className="font-extrabold text-[50px] text-center mt-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#f56551]">
            Discover Your Next Adventure with AI:
          </span>
          <br />
          Personalized Itineraries at Your Fingertips
        </motion.h1>
        <motion.p
          className="text-xl text-gray-500 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Your personal trip planner and travel curator, creating custom
          iternaries tailored to your interest and budget
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6"
        >
          <Link to={"/create-trip"}>
            <Button variant="dark" className="p-5 font-light">
              Get Started for Free<span className="text-xl">✨</span>
            </Button>
          </Link>
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <ImageSlider />
    </>
  );
}

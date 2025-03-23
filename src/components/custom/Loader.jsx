import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src="/tripgenie-logo.png"
        alt="TripGenie Logo"
        className="w-52 animate-heartbeat"
      />
    </div>
  );
};

export default Loader;

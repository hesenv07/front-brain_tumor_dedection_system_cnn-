"use client";

import Lottie from "lottie-react";

import spinner from "../resource/animation/brain-tumor-research.json";

const LottieSpinner = () => {
  return (
    <Lottie
      loop={true}
      animationData={spinner}
      style={{
        width: "320px",
        height: "320px",
      }}
    />
  );
};

export default LottieSpinner;

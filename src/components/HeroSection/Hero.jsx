import React from "react";
import CarouselComponent from "./CarouselComponent";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="hero h-[400px]">
      <div className="max-w-[1280px] mx-auto px-6 pt-[69px] pb-9">
        <TypeAnimation
          sequence={["CRYPTOFOLIO WATCH LIST", 1000]}
          className="font-Montserrat font-semibold text-center text-6xl leading-[72px] text-secondary"
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />
        <p className="font-Montserrat text-sm font-medium leading-5 w-96 mb-8 text-center mt-[-8px] mx-auto text-fontColor">
          Get all the Info regarding your favorite Crypto Currency
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <CarouselComponent />
        </motion.div>
      </div>
    </section>
  );
}

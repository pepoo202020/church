"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { SlidedHeader } from "./SlidedHeader";

export const SlidingHeader = () => {
  const [slidingPessed, setSlidingPressed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const handleSlidingBtn = () => {
    setSlidingPressed((pre) => !pre);
  };
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <motion.div
      initial="hidden"
      animate={slidingPessed ? "visible" : "hidden"}
      variants={{
        visible: { height: "430.837px" },
        hidden: { height: "20px" },
      }}
      transition={{ duration: 1, type: "spring" }}
      className={`sliding_header_container `}
    >
      {slidingPessed && (
        <div className={`slided_header_component`}>
          <SlidedHeader />
        </div>
      )}
      <Button
        className="sliding_header_container_btn"
        size="icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleSlidingBtn}
      >
        <motion.div
          initial={false}
          animate={hovered ? { rotate: 180 } : { rotate: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          {slidingPessed ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </motion.div>
      </Button>
    </motion.div>
  );
};

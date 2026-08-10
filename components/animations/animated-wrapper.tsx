"use client";

import * as React from "react";
import { motion, MotionProps } from "framer-motion";
import { fadeIn, scaleUp, slideInLeft, slideInRight, zoomIn } from "@/animations/variants";

export interface AnimatedWrapperProps extends MotionProps {
  children: React.ReactNode;
  variant?: "fadeIn" | "slideLeft" | "slideRight" | "scaleUp" | "zoomIn";
  delay?: number;
  className?: string;
}

export const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  variant = "fadeIn",
  delay = 0,
  className,
  ...props
}) => {
  const variantMap = {
    fadeIn,
    slideLeft: slideInLeft,
    slideRight: slideInRight,
    scaleUp,
    zoomIn,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variantMap[variant]}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

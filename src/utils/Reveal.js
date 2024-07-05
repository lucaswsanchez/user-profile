"use client";

import { useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, cloneElement } from "react";

function Reveal({ children, direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariants = (direction) => {
    switch (direction) {
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        };
      case "up":
      default:
        return {
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getVariants(direction);

  return cloneElement(children, {
    ref: ref,
    initial: "hidden",
    animate: mainControls,
    variants: variants,
    transition: { duration: 1, delay: 0.25 },
  });
}

export default Reveal;

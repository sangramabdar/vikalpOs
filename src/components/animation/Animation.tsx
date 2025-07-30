import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ScrollAnimation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div style={{ height: "200vh", padding: "50px" }}>
      <div ref={ref} style={{ height: "100vh", background: "#eee" }}>
        <motion.div
          style={{
            scale,
            opacity,
            background: "tomato",
            width: "200px",
            height: "200px",
            margin: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default ScrollAnimation;

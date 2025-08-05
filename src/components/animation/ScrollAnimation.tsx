import {
  useScroll,
  motion,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef } from "react";

const boxes = ["1", "2", "3"];

function Box({ box, index, scrollYProgress }) {
  const ref = useRef(null);

  const y = useTransform(scrollYProgress, [0, index * 0.2], [0, -1200]);
  const scale = useTransform(scrollYProgress, [0, index * 0.2], [0, 1]);

  return (
    <motion.div
      ref={ref}
      key={index}
      className={`bg-red-300 mx-4 w-full h-[500px]`}
      style={{ scale }}
    >
      {box}
    </motion.div>
  );
}

function ScrollAnimation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });
  const value = useTransform(scrollYProgress, [0, 1], ["red", "aqua"]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -1200]);

  useMotionValueEvent(scrollYProgress, "change", event => {
    console.log("sangram", "changed", event);
  });

  return (
    <section className="relative h-[200vh] w-full" ref={ref}>
      <motion.div className="sticky top-[100px] overflow-hidden">
        <motion.div className="flex flex-col gap-20 w-full">
          {boxes.map((box, index) => (
            <Box
              box={box}
              index={index + 1}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );

  return (
    <div ref={ref} className="h-100 relative w-full overflow-hidden">
      <motion.div style={{ height: "1000px", x: x }}>
        <div className="flex h-full w-fit overflow-x-hidden">
          {boxes.map(box => (
            <div className={`bg-red-300 mx-4 w-[1200px] h-full`}>{box}</div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function StickyScrollAnimated() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <section className="relative h-[200vh] w-full bg-gray-100" ref={ref}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          className="bg-blue-500 text-white p-10 rounded-xl text-4xl"
          style={{ scale }}
        >
          Scroll to Scale Me
        </motion.div>
      </div>
    </section>
  );
}

export default ScrollAnimation;

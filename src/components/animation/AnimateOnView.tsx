import { motion } from "framer-motion";
import type { ReactNode } from "react";

const animations = {
  slideBottom: {
    y: 40,
  },
  slideTop: {
    y: -40,
  },
  slideToLeft: {
    x: -40,
  },
  slideToRight: {
    x: 40,
  },
};

type AnimationKey = keyof typeof animations;

interface MotionFadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  animationTouse: AnimationKey;
}

export default function AnimateOnView({
  children,
  animationTouse = "slideBottom",
  delay = 0,
  duration = 0.3,
}: MotionFadeInProps) {
  const animtionProps = animations[animationTouse];

  return (
    <motion.div
      initial={{ opacity: 0, ...animtionProps }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: false, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

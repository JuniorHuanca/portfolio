export const motionDivProps = {
  initial: "hidden",
  whileInView: "visible",
  transition: { delay: 0.2, duration: 0.5 },
  variants: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
};

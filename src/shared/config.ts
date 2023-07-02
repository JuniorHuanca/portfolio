export const motionDivProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.5 },
  variants: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
};

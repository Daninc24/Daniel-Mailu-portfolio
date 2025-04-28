export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
      scale: 0.8, // Add a scale property
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1, // Add a scale property
      transition: {
        type: "spring", // Change the transition type to "spring"
        duration: 1.2,
        delay: delay,
        stiffness: 100, // Add a stiffness property
        damping: 10, // Add a damping property
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    mobile: {
      // Add a mobile variant
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: 0,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
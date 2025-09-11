const animaition = {
  old: {
    name: "none",
    duration: "1s",
    easing: "ease-in",
  },
  new: {
    name: "slide-left",
    duration: "1s",
    easing: "ease-in-out",
  },
};

const backAnimation = {
  old: {
    name: "none",
    duration: "1s",
    easing: "ease-in",
  },
  new: {
    name: "slide-rigth",
    duration: "1s",
    easing: "ease-in-out",
  },
};

export const screenTransition = {
  forwards: animaition,
  backwards: backAnimation,
};

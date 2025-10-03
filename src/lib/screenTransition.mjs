const animation = {
  old: {
    name: "none",
    duration: "0.7s",
    easing: "ease-in",
  },
  new: {
    name: "slide-left",
    duration: "0.7s",
    easing: "ease-in-out",
  },
};

const backAnimation = {
  old: {
    name: "none",
    duration: "0.7s",
    easing: "ease-in",
  },
  new: {
    name: "slide-rigth",
    duration: "0.7s",
    easing: "ease-in-out",
  },
};

export const screenTransition = {
  forwards: animation,
  backwards: backAnimation,
};

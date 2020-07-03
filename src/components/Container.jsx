import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Controls from "./Controls";
import Animation from "./Animation";

const initialState = {
  duration: 3,
  initialColor: "#3399FF",
  initialHeight: 300,
  initialWidth: 300,
  initialRotation: 0,
  initialScale: 1,
  initialShape: 1,
  finalColor: "#3399FF",
  finalHeight: 300,
  finalWidth: 300,
  finalRotation: 0,
  finalScale: 1,
  finalShape: 1,
};

const colors = [
  { name: "red", value: "#FF3333" },
  { name: "orange", value: "#FA6900" },
  { name: "yellow", value: "#FEAE2D" },
  { name: "green", value: "#00CC99" },
  { name: "blue", value: "#3399FF" },
  { name: "purple", value: "#9A12B3" },
  { name: "white", value: "white" },
  { name: "black", value: "black" },
];

const Container = () => {
  const [animation, setAnimation] = useState(initialState);
  const handleChange = (e) => {
    setAnimation({ ...animation, [e.target.id]: e.target.value });
  };
  const resetAnimation = () => {
    setAnimation(initialState);
  };
  const randomAnimation = () => {
    setAnimation({
      duration: Math.floor(Math.random() * 20) + 1,
      initialWidth: Math.floor(Math.random() * 300),
      initialHeight: Math.floor(Math.random() * 300),
      initialRotation: Math.floor(Math.random() * 360),
      initialColor: colors[Math.floor(Math.random() * 7)].value,
      initialScale: Math.random() + 0.5,
      initialShape: Math.floor(Math.random() * 100),
      finalWidth: Math.floor(Math.random() * 300),
      finalHeight: Math.floor(Math.random() * 300),
      finalRotation: Math.floor(Math.random() * 360),
      finalColor: colors[Math.floor(Math.random() * 7)].value,
      finalScale: Math.random() + 0.5,
      finalShape: Math.floor(Math.random() * 100),
    });
  };
  return (
    <Wrapper>
      <Controls
        handleChange={handleChange}
        animation={animation}
        resetAnimation={resetAnimation}
        randomAnimation={randomAnimation}
        colors={colors}
      />
      <Animation animation={animation} />
    </Wrapper>
  );
};

export default Container;

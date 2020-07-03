import React, { useState } from "react";
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

const Container = () => {
  const [animation, setAnimation] = useState(initialState);
  const handleChange = (e) => {
    setAnimation({ ...animation, [e.target.id]: e.target.value });
  };
  return (
    <>
      <Controls handleChange={handleChange} animation={animation} />
      <Animation animation={animation} />
    </>
  );
};

export default Container;

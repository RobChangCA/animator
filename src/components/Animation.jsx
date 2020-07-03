import React from "react";
import styled, { keyframes } from "styled-components";

const motion = (props) => {
  return keyframes`
  0% {
    width: ${props.initialWidth}px;
    height: ${props.initialHeight}px;
    background: ${props.initialColor};
    transform: scale(${props.initialScale}) rotate(${props.initialRotation}deg);
    border-radius: ${props.initialShape}%;
  }
  50% {
    width: ${props.finalWidth}px;
    height: ${props.finalHeight}px;
    background: ${props.finalColor};
    transform: scale(${props.finalScale}) rotate(${props.finalRotation}deg);
    border-radius: ${props.finalShape}%;
  }
  100% {
    width: ${props.initialWidth}px;
    height: ${props.initialHeight}px;
    background: ${props.initialColor};
    transform: scale(${props.initialScale}) rotate(${props.initialRotation}deg);
    border-radius: ${props.initialShape}%;
  }
`;
};

const Animator = styled("div")`
  animation: ${(props) => motion} ${(props) => props.duration}s infinite;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

const Animation = ({ animation }) => {
  return (
    <Section>
      <Animator {...animation} />
    </Section>
  );
};

export default Animation;

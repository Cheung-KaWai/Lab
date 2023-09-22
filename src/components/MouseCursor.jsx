import React, { useEffect, useRef, useState } from "react";
import { useMouse } from "../hooks/useMouse";
import styled from "styled-components";

export const MouseCursor = () => {
  const { position, visible } = useMouse();

  return (
    <>
      <OuterCircle
        pos={position}
        opacity={visible}
      />
      <InnerCircle
        pos={position}
        opacity={visible}
      />
    </>
  );
};

const OuterCircle = styled.div.attrs((props) => ({
  style: {
    transform: `translate(${props.pos.x - 15}px,${props.pos.y - 15}px)`,
    opacity: props.opacity,
  },
}))`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  top: 0;
  left: 0;
  border: 1px solid #fff;
  transition: all 0.2s ease-out;
  position: absolute;
  z-index: 1;
  pointer-events: none;
`;

const InnerCircle = styled.div.attrs((props) => ({
  style: {
    transform: `translate(${props.pos.x - 3}px,${props.pos.y - 3}px)`,
    opacity: props.opacity,
  },
}))`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  top: 0rem;
  left: 0rem;
  background-color: white;
  position: absolute;
  z-index: 1;
  pointer-events: none;
`;

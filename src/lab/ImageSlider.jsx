import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

// Clamp number between two values with the following line:
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export const ImageSlider = () => {
  const [progress, setProgress] = useState(0);
  const [normalizedProgress, setNormalizedProgress] = useState(0);
  const [startX, setStartX] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [dragging, setDragging] = useState(false);

  const wrapperRef = useRef();

  const handleToucheStart = (e) => {
    e.preventDefault();
    setDragging(true);
    setStartX(e.clientX);
  };

  const handleToucheMove = (e) => {
    if (!dragging) return;

    setProgress((oldProgress) => {
      const progresValue = clamp(oldProgress + (startX - e.clientX), 0, maxScroll);
      setNormalizedProgress(progresValue / maxScroll);
      return progresValue;
    });

    setStartX(e.clientX);
  };

  const handleTouchEnd = (e) => {
    setDragging(false);
  };

  const handleResize = () => {
    setProgress(0);
    setNormalizedProgress(0);
    setMaxScroll(wrapperRef.current.clientWidth - window.innerWidth);
  };

  useEffect(() => {
    //set scroll max width
    setMaxScroll(wrapperRef.current.clientWidth - window.innerWidth);

    //add events
    window.addEventListener("mousedown", handleToucheStart);
    window.addEventListener("mousemove", handleToucheMove);
    window.addEventListener("mouseup", handleTouchEnd);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mouseleave", handleTouchEnd);

    //remove event listeners
    return () => {
      window.removeEventListener("mousedown", handleToucheStart);
      window.removeEventListener("mousemove", handleToucheMove);
      window.removeEventListener("mouseup", handleTouchEnd);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mouseleave", handleTouchEnd);
    };
  }, [startX]);

  return (
    <>
      <Slider>
        <SliderWrapper
          ref={wrapperRef}
          offset={progress}
        >
          <SliderItem dragging={dragging ? 0.8 : 1}>
            <ItemImage src="/img/img.png" />
          </SliderItem>
          <SliderItem dragging={dragging ? 0.8 : 1}>
            <ItemImage src="/img/img.png" />
          </SliderItem>
          <SliderItem dragging={dragging ? 0.8 : 1}>
            <ItemImage src="/img/img.png" />
          </SliderItem>
          <SliderItem dragging={dragging ? 0.8 : 1}>
            <ItemImage src="/img/img.png" />
          </SliderItem>
          <SliderItem dragging={dragging ? 0.8 : 1}>
            <ItemImage src="/img/img.png" />
          </SliderItem>
          <SliderItem dragging={dragging ? 0.8 : 1}>
            <ItemImage src="/img/img.png" />
          </SliderItem>
        </SliderWrapper>
      </Slider>
      <Progressbar bar={normalizedProgress} />
    </>
  );
};

const Slider = styled.div`
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2vw;
`;

const SliderWrapper = styled.div.attrs((props) => ({
  style: {
    transform: `translateX(-${props.offset}px)`,
  },
}))`
  display: flex;
  gap: 1vw;
  transition: all 0.3s ease-out;
`;

const SliderItem = styled.div.attrs((props) => ({
  style: {
    transform: `scaleY(${props.dragging})`,
  },
}))`
  display: inline-block;
  vertical-align: middle;
  width: 35vw;
  aspect-ratio: 4/3;
  flex-shrink: 0;
  padding: 2vw;
  transition: all 0.3s 0.1s ease-in;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Progressbar = styled.div`
  position: absolute;
  left: 2vw;
  bottom: 2vw;
  width: 20vw;
  height: 0.2rem;
  background-color: #444444;
  border-radius: 1rem;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background-color: #dbdbdb;
    transform-origin: left;
    transform: ${(props) => `scaleX(${props.bar})`};
    transition: all 0.5s ease-out;
  }
`;

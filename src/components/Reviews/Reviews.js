import { Container, Title, ReviewsContainer, Review, Body, Logo, Img } from "./Reviews.styles";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import ReviewCard from "../ReviewCard/ReviewCard";

function Reviews({ reviews = [], title = "Reviews" }) {
  const carousel = useRef();
  const [startX, setX] = useState(false);
  const [carouselScrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setDragging] = useState(false);
  const [scrollDirection, setDirection] = useState("forward");
  let timeout;
  let interval;

  // useEffect(() => {
  // if (scrollDirection) {
  //   interval = setInterval(() => {
  //     if (carousel) {
  //       carousel.current.style.scrollSnapType = "both mandatory";
  //       carousel.current.style.scrollBehavior = "smooth";
  //       if (scrollDirection === "backward") {
  //         if (carousel.current.scrollLeft - carousel.current.offsetWidth <= 0) {
  //           clearInterval(interval);
  //           setDirection("forward");
  //         }
  //         carousel.current.scrollBy({
  //           left: -carousel.current.offsetWidth / 2,
  //           behavior: "smooth",
  //         });
  //       }
  //       if (scrollDirection === "forward") {
  //         if (
  //           carousel.current.scrollLeft + carousel.current.offsetWidth >=
  //           carousel.current.scrollWidth - carousel.current.offsetWidth
  //         ) {
  //           clearInterval(interval);
  //           setDirection("backward");
  //         }
  //         carousel.current.scrollBy({
  //           left: carousel.current.offsetWidth / 2,
  //           behavior: "smooth",
  //         });
  //       }
  //     }
  //   }, 2000);
  // }
  // }, [scrollDirection]);

  function handleMouseDown(e) {
    const x = e.pageX - carousel.current.offsetLeft;
    setX(x >= 0 ? x : 0);
    setScrollLeft(carousel.current.scrollLeft);
    clearInterval(interval);
  }

  function handleMouseMove(e) {
    e.preventDefault();
    if (typeof startX === "number") {
      carousel.current.style.scrollBehavior = "";
      carousel.current.style.scrollSnapType = "";
      setDragging(true);
      carousel.current.scrollLeft =
        startX - (e.pageX - carousel.current.offsetLeft) + carouselScrollLeft;
    }
  }

  function stopDragging(e) {
    if (
      Math.abs(carouselScrollLeft - carousel.current.scrollLeft) < 1 &&
      e.target !== carousel.current
    ) {
      setDragging(false);
    }
    setX(false);
  }

  function handleClick(e) {
    if (e.target === carousel.current && !isDragging) {
      carousel.current.style.scrollSnapType = "both mandatory";
      carousel.current.style.scrollBehavior = "smooth";
      return;
    }
    if (
      Math.abs(carouselScrollLeft - carousel.current.scrollLeft) < 1 &&
      e.target !== carousel.current
    ) {
      const scrollValue =
        e.currentTarget.getBoundingClientRect().left -
        carousel.current.offsetLeft -
        (carousel.current.offsetWidth - e.currentTarget.getBoundingClientRect().width) / 2;

      carousel.current.scrollBy({
        left: Math.abs(scrollValue) > 1 ? scrollValue : 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        carousel.current.style.scrollSnapType = "both mandatory";
        carousel.current.style.scrollBehavior = "smooth";
      }, 200);
    }
  }

  function handlePress(e) {
    clearInterval(interval);
    if (e.type === "keydown" && carousel.current.style.scrollSnapType) {
      timeout = setTimeout(() => {
        setDragging(true);
        carousel.current.style.scrollSnapType = "";
        carousel.current.style.scrollBehavior = "";
      }, 300);
    }

    if (e.type === "keyup" && !isDragging) {
      clearTimeout(timeout);
      e.preventDefault();
      carousel.current.style.scrollSnapType = "both mandatory";
      carousel.current.style.scrollBehavior = "smooth";
    }
  }

  return (
    <Container>
      <Title className="section-title">{title}</Title>
      <ReviewsContainer
        ref={carousel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onClick={handleClick}
        onKeyUpCapture={handlePress}
        onKeyDown={handlePress}
        onTouchStart={() => clearInterval(interval)}
        tabIndex={0}>
        {reviews.map((review, i) => (
          <ReviewCard review={review} onClick={handleClick} key={i} />
        ))}
      </ReviewsContainer>
    </Container>
  );
}

export default Reviews;

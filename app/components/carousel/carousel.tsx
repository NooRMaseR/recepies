"use client";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./carousel.module.css";
import Image from "next/image";
import React from "react";

interface CarouselProps {
  items: {
    src: string;
    alt: string;
    textChildren?: React.ReactNode;
  }[];
  settings?: AliceCarousel["props"];
}

export default function Carousel({
  items,
  settings = {
    mouseTracking: true,
    touchTracking: true,
    autoPlay: true,
    disableButtonsControls: true,
    infinite: true,
    autoHeight: true,
    animationDuration: 800,
    autoPlayInterval: 3000,
    animationType: "slide",
  }
}: CarouselProps) {
  const carouselRef = React.useRef<AliceCarousel>(null);
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const onDragEvent = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();

  const NextBTN = () => {
    return (
      <button type="button" onClick={() => carouselRef.current?.slideNext()}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    );
  };

  const PrevBTN = () => {
    return (
      <button type="button" onClick={() => carouselRef.current?.slidePrev()}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
    );
  };

  const handelOnSlideChange = (e: EventObject) => setCurrentSlide(e.item);

  return (
    <div className={styles.carouselHolder}>
      <PrevBTN />
      <AliceCarousel
        ref={carouselRef}
        onSlideChanged={handelOnSlideChange}
        {...settings}
      >
        {items.map((imgItem, index) => (
          <div key={index} className={styles.imgDiv}>
            <Image
              src={imgItem.src}
              alt={imgItem.alt}
              priority
              fill
              onDragStart={onDragEvent}
            />
            {index === 0 ? (
              <div
                className={`${styles.imgInfo} ${
                  currentSlide === 3 || currentSlide === 0 ? styles.animate : ""
                }`}
              >
                {imgItem.textChildren}
              </div>
            ) : (
              <div
                className={`${styles.imgInfo} ${
                  currentSlide === index ? styles.animate : ""
                }`}
              >
                {imgItem.textChildren}
              </div>
            )}
          </div>
        ))}
      </AliceCarousel>
      <NextBTN />
    </div>
  );
}

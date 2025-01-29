'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 100 }, // Start position below the view
          {
            y: 0,
            duration: 0.1, // Duration for movement
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Cleanup on unmount
    return () => {
      // Clean up all triggers when the component is unmounted
      ScrollTrigger.refresh();
    };
  }, []);

  return (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
};

export default useScrollAnimation;
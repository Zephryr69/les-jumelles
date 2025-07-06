// src/hooks/useScrollReveal.js
import { useState, useEffect } from "react";

function useScrollReveal(ref, rootMargin = "0px") {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // On arrête l'observation dès que c'est visible
        }
      },
      {
        rootMargin,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return isVisible;
}

export default useScrollReveal;

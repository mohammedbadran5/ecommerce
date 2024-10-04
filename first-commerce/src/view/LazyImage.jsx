// LazyImage.js
import React, { useEffect, useState } from 'react';

const LazyImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          imgObserver.disconnect(); // Stop observing after loading
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1, // Load when 10% of the image is visible
      }
    );

    const imgElement = document.getElementById(alt); // Use alt as unique id
    if (imgElement) {
      imgObserver.observe(imgElement);
    }

    return () => {
      if (imgElement) {
        imgObserver.unobserve(imgElement);
      }
    };
  }, [alt]);

  return (
    <img
      id={alt}
      src={isVisible ? src : undefined} // Only set the src if the image is visible
      alt={alt}
      style={{ width: '100%', height: 'auto' }} // Adjust styles as needed
    />
  );
};

export default LazyImage;

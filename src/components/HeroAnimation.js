import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Hero.json';

const HeroAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Vérifie si l’écran est de type mobile (largeur max 768px)
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div>
      <Lottie
        className="hero-container"
        animationData={animationData}
        loop={!isMobile} // ✅ Désactive la boucle sur mobile
      />
    </div>
  );
};

export default HeroAnimation;

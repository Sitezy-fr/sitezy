import React, { useState, useEffect } from "react";
import manon from "../images/Manon.jpg";
import mathis from "../images/Mathis.jpg";
import ness from "../images/Ness.jpg";
import florian from "../images/Florian.jpg";
import erwan from "../images/Erwan.jpg";
import benjamin from "../images/Benjamin.jpg";
import maeva from "../images/Maeva.jpg";

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Florian", position: "Directeur général", image: florian, description: "#toutestpossible #lovestratégie #geek #motard" },
    { id: 2, name: "Erwan", position: "Chef de projet", image: erwan, description: "#fautquonteste #onpeutfaireça? #lapêche? #lamer<3" },
    { id: 3, name: "Benjamin", position: "Architecte IT", image: benjamin, description: "#toutestcarré #imbatman #athlete #mentaldacier #geek #vivelamontagne" },
    { id: 4, name: "Maeva", position: "Webdesigner & Graphiste", image: maeva, description: "#lartestpartout #challengeaccepted #jungle #elleestouNess?" },
    { id: 5, name: "Manon", position: "Chargé de projet digital", image: manon, description: "#okgo #cestdejafait #timidemaisleader #discretemaisefficace" },
    { id: 6, name: "Mathis", position: "Developpeur junior", image: mathis, description: "#jadorelecode #lovejavascript #basecremeourien #japon" },
    { id: 7, name: "Ness", position: "Égérie Sitezy", image: ness, description: "#jesuisuneprincesse #etjelesais #sheldon #monsieurporc" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Détecte la largeur de l'écran et ajuste le nombre de cartes visibles
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setVisibleCards(3);
      } else if (width >= 800) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleTeamMembers = [
    ...teamMembers.slice(currentIndex, currentIndex + visibleCards),
    ...teamMembers.slice(0, Math.max(0, currentIndex + visibleCards - teamMembers.length)),
  ];

  return (
    <section className="team-section">
        <div className="details">
            <h2 className="team-title">La Sitezy's team</h2>
            <p className="team-subtitle">Découvrez notre équipe à taille humaine, composée de spécialistes passionnés, agiles et performants</p>
        </div>
      <div className="carousel">
        <button className="carousel-button left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-track">
          {visibleTeamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Team;

import React, { useState } from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="player-card" onClick={openModal}>
        <img src={image} alt={`${name}`} className="player-image" />
        <h2 className="player-name">{name}</h2>
        <p className="player-position">{position}</p>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={image} alt={`${name}`} className="modal-image" />
            <h2>{name}</h2>
            <p>{position}</p>
            <div className="player-stats">
              <p>Points per Game: {stats.pointsPerGame}</p>
              <p>Assists per Game: {stats.assistsPerGame}</p>
              <p>Rebounds per Game: {stats.reboundsPerGame}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BasketballPlayerCard;

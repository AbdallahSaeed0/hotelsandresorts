import React from 'react';
import { FaPlay } from 'react-icons/fa';
import '../../../styles/components/features/FloatingActions.css';

const FloatingActions = () => {
  const handleBookRoom = () => {
    alert('Book a Room clicked!');
  };

  const handleBookTable = () => {
    alert('Book a Table clicked!');
  };

  return (
    <div className="floating-actions">
      <button 
        className="btn"
        onClick={handleBookRoom}
        aria-label="Book a room"
      >
        BOOK A <span className="room-text">ROOM</span>
        <FaPlay className="play-icon" />
      </button>
      <button 
        className="btn"
        onClick={handleBookTable}
        aria-label="Book a table"
      >
        BOOK A <span className="table-text">TABLE</span>
        <FaPlay className="play-icon" />
      </button>
    </div>
  );
};

export default FloatingActions;

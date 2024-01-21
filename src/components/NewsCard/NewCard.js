import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import './NewsCard.scss';

const NewsCard = ({ index, title, image, description, date, content, author, url}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="card" onClick={openModal}>
        <img src={image} className="article-card-image" alt={title} />
        <div className="article-card-info">
          <p className="article-card-title">{title}</p>
          <p className="article-card-description">{description}</p>
          <p className='article-card-author'>Author: {author}</p>
          <p className="article-card-date">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title={title}
        image={image}
        description={description}
        content={content} 
        date={date}
        url={url}
      />
    </>
  );
};

export default NewsCard;

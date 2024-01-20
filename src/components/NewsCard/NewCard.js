import './NewsCard.scss';
import { Link } from 'react-router-dom';

const NewsCard = ({ index, title, image, description, date }) => {
  return (
    //   // <Link className='article-container' to=}>
    <div className="card">
      <img src={image} className="article-card-image" alt={title} />
      <div className="article-card-info">
        <p className="article-card-title">{title}</p>
        <p className="article-card-description">{description}</p>
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
    // </Link>
  );
};

export default NewsCard;

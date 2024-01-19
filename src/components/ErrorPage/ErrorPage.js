import './ErrorPage.scss';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Oh no! Something happened! Please go back</h1>
      <Link to="/">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;

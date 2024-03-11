import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="bg-secondary p-4" style={{ marginTop: 'auto' }}>
      <div className="container text-center">
        {location.pathname !== '/' && (
          <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        <h4>
          Made with ReactJS, GraphQL, Node.js, and MongoDB.{' '}
          <span className="emoji" role="img" aria-label="heart" aria-hidden="false">
            ❤️
          </span>{' '}
          by the Bookmark'd Team.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;

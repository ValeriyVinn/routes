import PropTypes from 'prop-types';
import defaultImage from '../Paintings/default.jpg';

const Paintings = ({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'unknown',
  price,
  quantity,
}) => {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{author}</a>
      </p>
      <p>Price: {price} money</p>
      <p>Availability: {quantity < 10 ? 'in stock' : 'runing low'}</p>
      <button type="button">Add to basket</button>
    </div>
  );
};

Paintings.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Paintings;

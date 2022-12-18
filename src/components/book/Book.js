import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;
  return (
    <li>
      {title}
      {author}
      <button type="button">Delete</button>
    </li>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

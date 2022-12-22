import PropTypes from 'prop-types';
import BooksList from './BooksList';
import InputBook from './InputBook';

const BookContainer = (props) => {
  const { books } = props;
  return (
    <div>
      <BooksList books={books} />
      <InputBook />
    </div>
  );
};

BookContainer.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default BookContainer;

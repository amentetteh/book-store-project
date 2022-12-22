import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = (props) => {
  const { books } = props;
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};
BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default BooksList;

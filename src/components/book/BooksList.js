import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BooksList extends React.PureComponent {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
    );
  }
}
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

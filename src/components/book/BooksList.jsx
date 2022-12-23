import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { getAllBooks } from '../../redux/books/books';
import BookEnty from '../../models/book';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  console.log(books);

  const mappedBooks = books.books.map(
    (book) => Object.assign(new BookEnty(), JSON.parse(book)),
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, [books.refresh]);

  return (
    <ul>
      {mappedBooks.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </ul>
  );
};
export default BooksList;

import { useSelector } from 'react-redux';
import BookContainer from '../components/book/BookContainer';

const BooksPage = () => {
  const books = Array.from(useSelector((state) => state.books));
  return (
    <section>
      <BookContainer books={books} />
    </section>
  );
};
export default BooksPage;

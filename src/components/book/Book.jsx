import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;
  return (
    <li>
      {id}
      {title}
      {author}
      {category}
      <button type="button" onClick={() => dispatch(removeBook({ id }))}>Delete</button>
    </li>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;

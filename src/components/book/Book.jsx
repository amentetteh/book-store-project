import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;
  return (
    <li className="book-item">
      <div className="book">
        <div className="book-container">
          <div className="book-info">
            <h4 className="book-category">{category}</h4>
            <h2 className="book-title">{title}</h2>
            <h6 className="book-author">{author}</h6>
            <div className="action-buttons">
              <button className="action-button" type="button" onClick={() => ({})}>Comments</button>
              <div className="vertical-divider" />
              <button className="action-button" type="button" onClick={() => dispatch(removeBook({ id }))}>Delete</button>
              <div className="vertical-divider" />
              <button className="action-button" type="button" onClick={() => ({})}>Edit</button>
            </div>
          </div>
        </div>
        <div className="book-reading-progress-stat">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="book-reading-progress-stat-items">
            <p className="percent-complete">
              {Math.floor(Math.random() * 98)}
              %
            </p>
            <p className="completed">Completed</p>
          </div>
          <div className="book-reading-progress-divider" />
          <div className="current-chapter-container">
            <div className="progress-stat">
              <p className="current-chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter">
                Chapter
                {' '}
                {Math.floor(Math.random() * 133)}
              </p>
            </div>
            <div>
              <button className="primary-button" type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      </div>

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

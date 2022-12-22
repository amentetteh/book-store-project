import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

function Categories(props) {
  const { categories } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check status
      </button>
      <div>{categories}</div>
    </div>
  );
}
Categories.propTypes = {
  categories: PropTypes.string.isRequired,
};

export default Categories;

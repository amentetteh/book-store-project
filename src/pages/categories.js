import { useSelector } from 'react-redux';
import Categories from '../components/category/Categories';

const CategoriesPage = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <section>
      <Categories categories={categories} />
    </section>
  );
};
export default CategoriesPage;

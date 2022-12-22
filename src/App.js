/* eslint no-eval: 0 */
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/navigation/Header';
import BooksPage from './pages/books';
import CategoriesPage from './pages/categories';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </main>
  </div>
);

export default App;

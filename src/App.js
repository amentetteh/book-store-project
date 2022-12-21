/* eslint no-eval: 0 */
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/navigation/Header';
import Books from './pages/books';
import Categories from './components/category/Categories';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </main>
  </div>
);

export default App;

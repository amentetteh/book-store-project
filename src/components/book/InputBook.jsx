import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

function InputBook() {
  const [book, setBook] = useState({ id: undefined, title: '', author: '' });

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    if (book.title && book.author && book.category) {
      book.item_id = uuidv4();
      dispatch(addBook(book));
      setBook({
        item_id: undefined, title: '', author: '', category: '',
      });
    }
  };
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" name="title" value={book.title} placeholder="Title" onChange={changeHandler} required />
        <input type="text" name="author" id="author" value={book.author} placeholder="Author" onChange={changeHandler} required />
        <input type="text" name="category" id="category" value={book.category} placeholder="Category" onChange={changeHandler} required />
        <button type="button" onClick={addBookHandler}>ADD BOOK</button>
      </form>
    </div>
  );
}
export default InputBook;

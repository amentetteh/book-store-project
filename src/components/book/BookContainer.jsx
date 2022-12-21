import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import BooksList from './BooksList';
import InputBook from './InputBook';
import todos from '../../data/defaultsTodo.json';

const BookContainer = () => {
  const [books] = useState(todos);

  return (
    <div>
      <BooksList books={books} />
      <InputBook />
    </div>
  );
};
export default BookContainer;

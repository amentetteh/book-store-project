import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BooksList from './BooksList';
import InputBook from './InputBook';

function BookContainer() {
  const [books] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      author: 'Ehter 009',
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      author: 'Ehter 008',
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      author: 'Ehter 007',
    },
  ]);

  return (
    <div>
      <BooksList books={books} />
      <InputBook />
    </div>
  );
}
export default BookContainer;

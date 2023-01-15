import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doGet, doPost, doRequestWithoutBody } from '../../consume-api/api';
import { BOOK_URL } from '../../data/constants';
import BookEntity from '../../models/book';

const DISPLAY_BOOKS = 'book-store-project/books/DISPLAY_BOOKS';
const ADD_BOOK = 'book-store-project/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store-project/books/REMOVE_BOOK';

const initialState = {
  books: [],
  loading: false,
  refresh: false,
};
export const removeBook = createAsyncThunk(REMOVE_BOOK, (book) => doRequestWithoutBody(`${BOOK_URL}/${book.id}`, 'DELETE', false));
export const getAllBooks = createAsyncThunk(DISPLAY_BOOKS, () => doGet(BOOK_URL, true));
export const addBook = createAsyncThunk(ADD_BOOK, (book) => doPost(BOOK_URL, book, false));

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      // Add user to the state array
      const keys = Object.keys(action.payload);
      const bookList = [];
      keys.forEach((key) => {
        action.payload[key].forEach((value) => {
          const temp = new BookEntity(
            value.id,
            value.title,
            value.author,
            value.category,
          );
          temp.id = key;
          bookList.push(JSON.stringify(temp));
        });
      });
      return {
        ...state,
        books: bookList,
        loading: false,
      };
    });
    builder.addCase(getAllBooks.rejected, (state) => ({
      ...state, loading: false,
    }));

    builder.addCase(getAllBooks.pending, (state) => ({
      ...state, loading: true,
    }));

    builder.addCase(addBook.rejected, (state) => ({
      ...state, loading: false,
    }));

    builder.addCase(addBook.fulfilled, (state) => ({
      ...state, refresh: !state.refresh,
    }));

    builder.addCase(addBook.pending, (state) => ({
      ...state, loading: true,
    }));

    builder.addCase(removeBook.rejected, (state) => ({
      ...state, loading: false,
    }));

    builder.addCase(removeBook.fulfilled, (state) => ({
      ...state, refresh: !state.refresh,
    }));

    builder.addCase(removeBook.pending, (state) => ({
      ...state, loading: true,
    }));
  },
});
export default booksSlice.reducer;

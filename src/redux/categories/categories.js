const CHECK_STATUS = 'book-store-project/categories/CHECK_STATUS';

const initialState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'Under construction',
});

export default function categoryReducer(state = initialState, action) {
  if (action.type === CHECK_STATUS) {
    return action.payload;
  } return state;
}

import { CHECK_STATUS } from '../../data/constants';

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

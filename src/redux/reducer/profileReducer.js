import {PROFILE_TYPES} from '../action/profileAction';

const initialState = {
  loading: false,
  users: [],
  posts: [],
};
const pofileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PROFILE_TYPES.GET_USER:
      console.log(action.payload)
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };
    default:
      return state;
  }
};
export default pofileReducer;

import {
  MESSAGES_REQUEST,
  MESSAGES_SUCCESS,
  MESSAGES_FAILURE
} from "./constants";

export const initialState = {
  list: [],
  fetch: 0,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_REQUEST:
      return { ...state, loading: true };
    case MESSAGES_SUCCESS:
      return {
        ...state,
        list: action.payload.results,
        fetch: state.fetch + 1,
        loading: false
      };
    case MESSAGES_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

import { SET_USERS_TABLE } from "store/actions/recordActions";

const initialState = {};

const recordsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USERS_TABLE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default recordsReducer;

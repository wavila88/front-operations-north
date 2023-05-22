import { SET_USER } from "store/actions/securityActions";

const initialState = {
  userData: {},
};

const UtilsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export default UtilsReducer;

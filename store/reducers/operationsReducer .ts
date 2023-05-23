import { SET_OPERATIONS_DATA } from "store/actions/operationsActions";

const initialState = {};

const operationsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_OPERATIONS_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default operationsReducer;

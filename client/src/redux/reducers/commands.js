import { ADD_COMMAND } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

const addCommandReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMAND: {
      return action.payload.content;
    }
    default: {
      return state;
    }
  }
};

export default addCommandReducer;

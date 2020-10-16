import { ADD_COMMAND } from "./actionTypes";

let nextcommandID = 0;

export const addCommand = content => ({
  type: ADD_COMMAND,
  payload: {
    id: ++nextcommandID,
    content
  }
});

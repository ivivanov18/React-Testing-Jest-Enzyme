import { actionTypes } from "../actions/";

/**
 * Function successReducer
 * @param {array} state - array of guessed Words
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state
 */
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};

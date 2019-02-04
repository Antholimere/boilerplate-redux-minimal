import { SET_UI } from "../actions/types";

// put state to null
const initialState = {
  menuNav: 0,
  sideNav: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_UI:
      return {
        ...state,
        [action.label]: action.payload
      }
  }

  return state;
}

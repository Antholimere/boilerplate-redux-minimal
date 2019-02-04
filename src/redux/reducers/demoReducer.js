import { INCREMENT_COUNTER } from "../actions/types";

// put state to null
const initialState = {
  counter: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        counter: state.counter + 1
      }
  }

  return state;
}

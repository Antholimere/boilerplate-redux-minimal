import {
    INCREMENT_COUNTER,
    SET_UI
} from "./types";

export const incrementCounter = () => dispatch => {
    dispatch({ type: INCREMENT_COUNTER });
}
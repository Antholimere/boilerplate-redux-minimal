import {
    SET_UI
} from "./types";

export const setUI = (label, value) => async dispatch => {
    console.log('setting UI')
    // await dispatch({ type: SET_UI, payload: value, label: label});
};
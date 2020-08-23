/* eslint-disable prettier/prettier */
import { INCREMENT, DECREMENT } from './actionTypes';
// Tăng với giá trị step
export const increaseAction = (step) => {
    return {
        type: INCREMENT,
        step: step,
    };
};
// Giảm với giá trị step
export const decreaseAction = (step) => {
    return {
        type: DECREMENT,
        step: step,
    };
};

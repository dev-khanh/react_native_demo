import {EVENT_ADD_PARAMS, EVENT_GET_API} from './actionTypes';
export const addState = (sort) => {
  return {
    type: EVENT_GET_API,
    sort,
  };
};
export const addParams = (sort) => {
  return {
    type: EVENT_ADD_PARAMS,
    sort,
  };
};

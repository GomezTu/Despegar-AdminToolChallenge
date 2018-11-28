import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState, action) => {

  let newDeliveries = [];
  let newDelivery = {};

  switch (action.type) {
    case types.GET_DELIVERY_SUCCESS:
      return { ...state, deliveries: action.payload, fetching: false };
    case types.DELIVERY_CREATE:
      newDelivery = action.payload;
      newDelivery.id = state.deliveries.length + 1;
      return { ...state, deliveries: [ ...state.deliveries, newDelivery ] };
    case types.DELIVERY_DELETE:
      newDeliveries = state.deliveries.filter((d) => d.id !== action.payload);
      return { ...state, deliveries: newDeliveries };
    case types.DELIVERY_UPDATE:
    newDeliveries = state.deliveries.map((d) => {
      if (d.id !== action.payload.id) return d;
        return action.payload;
      })
      return { ...state, deliveries: newDeliveries };
    case types.DELIVERY_SELECT:
      return { ...state, selectedDelivery: action.payload };
    case types.CHANGE_FILTER:
      return { ...state, filter: action.payload };
    case types.RAISE_ERROR:
      return { ...state, error: action.payload };
    case types.SIMULATE_API_CALL:
      return { ...state, fetching: true };
    default:
      return { ...state };
  }
};
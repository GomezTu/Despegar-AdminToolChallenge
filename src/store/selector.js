import { createSelector } from 'reselect';

const getDeliveries = state => state.app.deliveries;
const getFilter = state => state.app.filter;

export const getFilteredDeliveries = createSelector(
  [getDeliveries, getFilter],
  (deliveries, filter) => {
    const a = deliveries.filter(d => d.name.toUpperCase().includes(filter.name.toUpperCase()) &&
      d.address.toUpperCase().includes(filter.address.toUpperCase()));
    return a || deliveries;
  }
);
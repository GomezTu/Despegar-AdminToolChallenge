import { filtersConfig } from '../constants/shared';

const initialState = {
  deliveries: [],
  selectedDelivery: {},
  filter: {
    name: '',
    address: '',
    phone: '',
  },
  filters: filtersConfig,
  order: {
    field: '',
    order: '',
  },
  error: undefined,
  fetching: false,
};

export default initialState;
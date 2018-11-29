import AppRouter from './App';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getDeliveries,
  changeFilter,
  raiseError,
  selectDelivery,
  deleteDelivery,
  updateDelivery,
  createDelivery,
  recoverDelivery } from "./store/actions";
import { getFilteredDeliveries } from './store/selector';

const mapStateToProps = (state) => {
  return({
    deliveries: getFilteredDeliveries(state),
    selectedDelivery: state.app.selectedDelivery,
    error: state.app.error,
    fetching: state.app.fetching,
    filter: state.app.filter,
    order: state.app.order,
    filters: state.app.filters,
  });
};

const dispatchActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
      getDeliveries,
      selectDelivery,
      changeFilter,
      raiseError,
      deleteDelivery,
      updateDelivery,
      createDelivery,
      recoverDelivery,
    },
    dispatch
  );
};

export default withRouter(connect(mapStateToProps, dispatchActionsToProps)(AppRouter));
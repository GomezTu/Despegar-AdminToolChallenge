import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { inputsForm } from '../../../constants/shared';

const DELIVERY_LIST_TITLE = 'Datos administrativos';

class Form extends React.Component {
  constructor(props) {
    super(props);
    const { selectedDelivery } = this.props;
    const isEdit = !!Object.keys(selectedDelivery).length;
    this.state = {
      ...selectedDelivery,
      isValid: isEdit,
    };
  }

  validateForm = () => {

    const requiredInputs = inputsForm.filter((i) => i.isRequired);
    const isValid = requiredInputs.reduce((acum, i) => {
      let a, b;
      if (typeof acum === 'object') {
        a = !!(this.state[acum.name]);
        b = !!this.state[i.name];
        return a && b;
      }
      if (typeof acum === 'boolean' ) {
        a = acum;
        b = !!this.state[i.name];
        return a && b;
      }
    });

    if (isValid !== this.state.isValid) this.setState({ isValid });
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    }, () => {
      this.validateForm();
    });
  }

  handleCancel = () => {
    this.props.history.push('/');
  }

  handleSave = () => {
    const { match: { params } } = this.props;
    if (params.id > 0) {
      this.props.updateDelivery(this.state);
    } else {
      this.props.createDelivery(this.state);
    }
    this.props.history.push('/');
  }
  
  render() {
    return (
      <div>
        <div className='col-12' style={{ marginTop: '20px', marginBottom: '20px' }}>
          <div className='row-fluid'>
            <div className='col-12 d-inline-block titleContainer'>
              <div className='float-left col-9 title'>
                <span>
                  {DELIVERY_LIST_TITLE}
                </span>
              </div>
            </div>
          </div>
        </div>
        {
          inputsForm.map((i) => {
            const Component = i.component;
            return (
              <div className='col-6'>
                <Component onChange={this.handleChange} value={this.state[i.name]} {...i} />
              </div>
            );
          })
        }
        <div className='col-11'>
          <div className='float-right'>
            <button className='btn btn-lg btn-primary'
              onClick={this.handleCancel}>Cancelar</button>
            <button disabled={!this.state.isValid} className='btn btn-lg btn-primary'
              onClick={this.handleSave} style={{ marginLeft: '5px'}}>Guardar</button>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(Form);
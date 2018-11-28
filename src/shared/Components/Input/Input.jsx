import React from  'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ''
    };
  }
  
  handleOnChange = (evt) => {
    if (this.props.onChange) this.props.onChange(evt);
    if (this.state.errorMessage !== '') {
      const errorMessage = '';
      this.setState({
        errorMessage,
      });
    }
  }

  handleBlur = (evt) => {
    if (this.props.onBlur) this.props.onBlur(evt);
    if (this.props.isRequired && evt.target.value === '') {
      const errorMessage = 'Este campo es obligatorio';
      this.setState({
        errorMessage,
      });
    }
  }

  render() {
    const { name, value, label, placeholder, type, length } = this.props;
  
    return (
      <div className='form-group'>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">{label}</span>
          </div>
          <input
            type={type}
            name={name}
            value={value}
            maxLength={length}
            onChange={(evt) => this.handleOnChange(evt)}
            onBlur={(evt) => this.handleBlur(evt)}
            class="form-control"
            placeholder={placeholder}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default" />
        </div>
        <span className='help-block float-right'
          style={{ color: 'red', fontWeight: 'bold' }}>{this.state.errorMessage}</span>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
}

export default Input;
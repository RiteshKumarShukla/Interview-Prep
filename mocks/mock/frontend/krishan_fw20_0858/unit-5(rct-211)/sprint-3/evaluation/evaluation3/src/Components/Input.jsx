import React, { forwardRef } from "react";
import "./Input.css";
import PropTypes from 'prop-types';
//type, size, variant, value and onChange.
const Input = ({type='text',size='md', variant,value, onChange}) => {

  return <input data-testid="inputTag"
   onChange={onChange}
    className={`${variant} ${size}`}
     type={type}
      value={value}/>;
};

export default Input;

Input.propTypes = {
  type:PropTypes.any,
  size:PropTypes.oneOf(['sm','md','lg','xl']),
  variant:PropTypes.oneOf(['outline','filled','flushed']).isRequired,
  value:PropTypes.string,
  onChange:PropTypes.func,
}

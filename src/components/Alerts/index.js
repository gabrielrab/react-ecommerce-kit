import React from 'react';
import './style.scss';

const Alert = (props) => {
  const getType = (type) => {
    const types = {
      default: 'c-alert-default',
      gray: 'c-alert-gray',
      success: 'c-alert-success',
      danger: 'c-alert-danger',
      warning: 'c-alert-warning',
      'ligth-green': 'c-alert-ligth-green',
    };
    return types[type] || types['default'];
  };
  const getAlign = (align) => {
    const types = {
      center: 'c-alert-center',
      rigth: 'c-alert-rigth',
      left: 'c-alert-left',
    };
    return types[align] || types['left'];
  };
  return (
    <div className={`c-alert ${getType(props.type)} ${getAlign(props.align)}`}>
      {props.children}
    </div>
  );
};

export default Alert;

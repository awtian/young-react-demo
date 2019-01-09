import React from 'react';

const Button = (props) => {
  return (
    <button
      onClick={props.fn} 
      style={{ fontSize: "16px", 
                padding: '10px', 
                color: 'white', 
                backgroundColor: props.color || 'skyblue',
                borderRadius: '15px'}}>
      {props.text}
    </button>
  );
}

export default Button;

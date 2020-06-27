import React from 'react';

const Button = ({buttonDisplayName, clickHandler,color})=>(
<button style={{color:color, border:'none',outline: 'none'}} 
onClick={clickHandler}>{buttonDisplayName}</button>
);
export default Button;
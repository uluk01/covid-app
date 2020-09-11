import React from 'react';
import style from './Button.module.css';

export const Button = ({outline, children}) => {
  
  const outlineStyle = outline ? style.outlineBtn : '';

  return (
    <button className={`${style.btn} ${outlineStyle}`}>
      {children}
    </button>
  )
}
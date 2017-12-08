import React, { Component } from 'react';

function SliderArrows(props) {
  const {className, onClick, direction} = props
  const customClass = direction === 'next' ? ' custom-arrow custom-next' : ' custom-arrow custom-prev'
  return (
    <button
      className={className + customClass}
      onClick={onClick}
    ></button>
  )
}


export default SliderArrows;

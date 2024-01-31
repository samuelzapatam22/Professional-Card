import React from 'react';
import route from '../../../src/graphics-elements/foto.jpeg'; 
import './Avatar.css'
const Avatar = () => {
  return (
    <div className="Avatar"> 
        <img src={route} alt=" "  />
    </div>
  );
}

export default Avatar;

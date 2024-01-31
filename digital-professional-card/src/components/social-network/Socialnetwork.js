import React from "react";
import './Socialnetwork.css'


const Socialnetwork = ({ Url,Icon,MailTo }) => {
  const ButtonClick = () => {
    if (MailTo) {
      window.location.href = `mailto:samuelzapatam1@gmail.com`; 
    } else if (Url) {
      window.location.href = Url;
    } else {
      console.log("No se proporcionó URL ni correo electrónico");
    }
  };
  

  return (
    <button className="Socialnetwork" onClick={ButtonClick}>
      <i className={Icon}></i> 
    </button>
    
  );
};

export default Socialnetwork;

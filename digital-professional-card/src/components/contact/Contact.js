import React from 'react';
import Socialnetwork from '../social-network/Socialnetwork';

const Contact = () => {
  const ButtonClick = () => {
    window.location.href = 'mailto:samuelzapatam1@gmail.com';
  };

  return (
    <div>
      <Socialnetwork Icon='far fa-envelope' MailTo={true}onClick={ButtonClick} />
      
    </div>
  );
};

export default Contact;

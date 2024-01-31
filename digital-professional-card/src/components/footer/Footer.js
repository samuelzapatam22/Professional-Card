import React from "react";
import './Footer.css'
import Socialnetwork from "../social-network/Socialnetwork";
const Footer = () => {
    return (
      <div className='Footer'>
        <div className="Instagram">    
                <Socialnetwork Url='https://www.instagram.com/samuelzapatam22' Icon='fab fa-instagram'/>
        </div>
        <div className="Facebook">
         <Socialnetwork Url='https://www.facebook.com/samuel.zapata.7921975' Icon='fab fa-facebook'/>
        </div>
        <div className="Github"> 
            <Socialnetwork Url='https://github.com/samuelzapatam22' Icon='fab fa-github'/>
        </div>
        <div className="Linkedin"> 
            <Socialnetwork Url='https://www.linkedin.com/in/dev-samzapata/' Icon='fab fa-linkedin'/>
        </div>



      </div>
    );
  }
  
  export default Footer;
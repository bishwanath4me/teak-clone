
import { ImWhatsapp } from "react-icons/im";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import React from "react";


const Topheader = () => {


  return (
    <header>

      <div className="contact-header">
        <div className="container">
          <div className="contact-info">
            <span ><IoMdCall />1800-1030054</span>
            <span><ImWhatsapp />Chat With Us</span>
            <span ><MdEmail /> contact@company.com</span>
            <span> Architects & Interior Designers </span>
            <span>Track your Order</span>
          </div>
          <div className="mobile-info">
            <span ><IoMdCall />1800-1030054</span>
            <span><ImWhatsapp />Chat With Us</span>
          </div>
        </div>

      </div>

      
    </header>
  );
};

export default Topheader;

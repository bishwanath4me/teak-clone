
import React, { useState, useRef } from "react";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
const Midheader = () => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    return (
      <div className="middleheader">

           <div className="container">


            <div className="logo-header">
                <strong className="logo">
                    <img class="main-logo" src="https://www.whiteteak.com/media/logo/websites/1/WT-logo.png" alt="The White Teak Company"  />
                </strong>
            </div>
            <div className="headerright">
                <nav className="navbar">
                    <div className="navbar-grid">
                        <div
                            className="account-section"
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}

                            ref={dropdownRef}
                        >
                            <span className="account-title">
                                <FaUser /> Account
                            </span>
                            {isOpen && (
                                <ul className="dropdown-menu">
                                    {["My Account", "Wishlist", "Sign In", "Create an Account", "Store User Login"].map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="wishlist">
                            <FaHeart /> Wishlist
                        </div>
                        <div className="cart">
                            <FaShoppingCart /> Cart
                        </div>
                    </div>
                </nav>

            </div>
        </div>
        </div> 
    )
}

export default Midheader
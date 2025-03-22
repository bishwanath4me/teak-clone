import { ImWhatsapp } from "react-icons/im";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import React, { useState } from "react";

function FooterSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <div className="artcontainer">
        <h1>
          Buy Decorative Lighting And Revamp Your Ravishing Decor With India's
          Largest Luxury Lighting Brand
        </h1>
        <p>
          An exquisite and extensive collection of luxury lighting awaits you to
          adorn your beautiful living spaces and transform them beyond your
          wildest dreams.
        </p>
        <p>
          We are a one-stop solution for all your luxury lighting needs and one
          visit to our luxury lighting stores anywhere in the country is what
          you truly need to see what you're missing out on. Over the years, The
          White Teak Company has established itself as one of the finest
          manufacturers and retailers of decorative lights, designer ceiling
          fans, and home decor.
        </p>

        <div className={`extra-content ${isExpanded ? "show" : ""}`}>
          <p>
            The White Teak Company is India's Largest Decorative Lighting Brand.
            For years, millions have entrusted us with their dreams, and we've
            always enabled them to realize their glorious visions of their dream
            homes.
          </p>
          <p>
            A splendid range of decorative lighting designs awaits you,
            including chandeliers, ceiling lights, wall lights, pendant lights,
            table lamps, and much more, each promising to redefine luxury and
            sophistication in your space.
          </p>
          <p>
            Step into the world of The White Teak Company and experience a
            seamless blend of aesthetics and innovation. Our collection is
            designed to cater to every taste, whether you prefer modern
            minimalism or vintage elegance.
          </p>
        </div>

        <button className="read-btn" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Read Less..." : "Read More..."}
        </button>
      </div>

      <footer className="footer">
        <div className="footer-container">
          {/* Logo & Address */}
          <div className="footer-logo">
            <img
              src="https://www.whiteteak.com/media/wysiwyg/footer/WT_logo.png"
              alt="White Teak Logo"
            />
            <ul>
              <li>
                <CiLocationOn />
                The White Teak Company, Velocity Block,
                <br />
                Prestige Technology Park III,
                <br />
                Marathahalli Ring Road, Bengaluru,
                <br />
                Karnataka 560103
              </li>
              <li>
                <CiMail />
                <p>help@whiteteak.com</p>
              </li>
              <li>
                <IoCallOutline />
                <p>1800-1030054</p>
              </li>
              <li>
                <ImWhatsapp />
                <p>Chat With Us</p>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <div>
              <p>Useful Links</p>
              <ul>
                <li>Store Locator</li>
                <li>Returns & Exchanges</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>Architects & Interior Designs</li>
                <li>Shipping Policy</li>
                <li>Our Policies</li>
              </ul>
            </div>
            <div>
              <p>Quick Links</p>
              <ul>
                <li>About Us</li>
                <li>My Account</li>
                <li>Track Order</li>
                <li>Blog</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <p style={{fontWeight:"bold", marginBottom: "10px"}}>Follow Us</p>
            <div className="social-images">
              <img
                src="https://scontent-bom2-4.cdninstagram.com/v/t39.30808-6/481665322_990129053317451_1478432817083607258_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=ZWcdPmXcQtgQ7kNvgHuGnTm&_nc_oc=AdkXLZJI3vQLQcSZ2idd6R1XmHfs-PSOAc_F3I378po3mRzC537zs2ZD27AZBEWWxt8&_nc_zt=23&_nc_ht=scontent-bom2-4.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=vNBiXY1lmBFACVXQ4zoGtA&oh=00_AYFZ1CTyHAYumd6RFhBC04oavhs_vDrK4PCHOSuUymsyWg&oe=67E0A874"
                alt="Instagram Post"
              />
              <img
                src="https://scontent-bom1-1.cdninstagram.com/v/t39.30808-6/482021340_990127343317622_2859049549343645641_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=YICE-sLhXUwQ7kNvgGVoisC&_nc_oc=AdmvWnGHYD7S6UF19IoxZtYeivVhsmq_MFQjoslwtcMwpWchccRFnZ30fM--XQVBc4M&_nc_zt=23&_nc_ht=scontent-bom1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=vNBiXY1lmBFACVXQ4zoGtA&oh=00_AYG3wiT1oofBLC-1fu8D7-eV20KHez7Go_NaafW3ItkHvA&oe=67E0D732"
                alt="Instagram Post"
              />
              <img
                src="https://scontent-bom2-1.cdninstagram.com/v/t51.75761-15/482459357_18377511184142732_6113040425994545787_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=nbZbi8wGkLAQ7kNvgHZtwoc&_nc_oc=AdnKob8iRG8U3nk8wR_JDzTxbba-a01llYsjyqmwviT8lIdGbR6qieFQb9Mybmuv38I&_nc_zt=23&_nc_ht=scontent-bom2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=vNBiXY1lmBFACVXQ4zoGtA&oh=00_AYEDf2ypLXvgGUPim10gNnXysCG2WRlkSbMdGL9EKn89gA&oe=67E0BE45"
                alt="Instagram Post"
              />
              <img
                src="https://scontent-bom2-2.cdninstagram.com/v/t39.30808-6/481262202_984959010501122_6033059492711714319_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=oH8ulGcmS-cQ7kNvgGSiGPu&_nc_oc=Adl86CJCKbeDoC0XZHAZIW26v8YvTNgrwhzT-87dhzQsBreBU0kaQgnIesFN3XjEM5U&_nc_zt=23&_nc_ht=scontent-bom2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=vNBiXY1lmBFACVXQ4zoGtA&oh=00_AYGnOjQT4NnqDDJbg3dNg1pAq6-j8e_UQOf63JzOqONzHw&oe=67E0DCFB"
                alt="Instagram Post"
              />
              <img
                src="https://scontent-bom2-4.cdninstagram.com/v/t39.30808-6/481339733_984957217167968_8170014003027811551_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=dfyDDsdEW7YQ7kNvgENxrYF&_nc_oc=Adlg6_oa9UOf6NUpSU5pOrTfBQx9C1IEOniTuDLspU_96U-Ce_QiURrc4c1XqkBtUOI&_nc_zt=23&_nc_ht=scontent-bom2-4.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=vNBiXY1lmBFACVXQ4zoGtA&oh=00_AYGMthMRgL78A6ut7ykGfhEc3yLJIAX-_Xw5EAOWLZwTfQ&oe=67E0D615"
                alt="Instagram Post"
              />
              <img
                src="https://scontent-bom1-1.cdninstagram.com/v/t39.30808-6/480954540_984954120501611_7185813967289473844_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=cNEheB4XMfcQ7kNvgGesrkZ&_nc_oc=AdmLbjR3JADUSJ-yPTaDvDe5bpvRYY3ny3IefGy1kS8_UioT1Yajr6UFz9Cx1xuV4sg&_nc_zt=23&_nc_ht=scontent-bom1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=vNBiXY1lmBFACVXQ4zoGtA&oh=00_AYGQRuoi9LbdUy9mIxzi21VNP30MPNWOI36iRjFgF2O38g&oe=67E0B744"
                alt="Instagram Post"
              />
              <img
                src="https://scontent-bom2-3.cdninstagram.com/v/t39.30808-6/480858214_983473530649670_1677049843287143708_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=2BnB6ApLgiwQ7kNvgEOgr0c&_nc_oc=AdmFgY5lPOnjnRxsNUi-0mnP6eykI4L6V531G9QxSU2OuVQIndl93c42M0_oUEZlFyQ&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=vNBiXY1lmBFACVXQ4zoGtA&oh=00_AYE8nHDJhdxVcN6EEPKbbA3OLw0nVggr0Ohzy5wn99ti1w&oe=67E0DDE5"
                alt="Instagram Post"
              />
              <img
                src="https://scontent-bom2-1.cdninstagram.com/v/t39.30808-6/480788220_979766414353715_1201231863503301729_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=u4wQXxo9gC8Q7kNvgEl1gWc&_nc_oc=Adn14dq-7gZWWolwEbmSM3sekXVm8oKKZCeaQFBBqScyjyg-wuJhW3V__ea9CTYg-AA&_nc_zt=23&_nc_ht=scontent-bom2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=vNBiXY1lmBFACVXQ4zoGtA&oh=00_AYHz6HUnwDphwC6rssrI-a884wRNKriFzHSHcErKJm97ZA&oe=67E0B404"
                alt="Instagram Post"
              />
              <img
                src="https://scontent-bom2-3.cdninstagram.com/v/t39.30808-6/481116547_979764864353870_4797990799796327364_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=qZAOBS195TsQ7kNvgHQWeW8&_nc_oc=Adm0LLtDUmeQn4s1DUs6hdMQEytKFxgwy475gkl56epSTqqN5fbvzm-vxNVDibjEbuU&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=vNBiXY1lmBFACVXQ4zoGtA&oh=00_AYHGknydAxk6CELngaGgRE_iaM53gLX4uwYwa0q-jAF8FA&oe=67E0A759"
                alt="Instagram Post"
              />
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <span>
          © 2016-2025 The White Teak Company u/o Obgenix Software Pvt. Ltd.. All
          Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default FooterSection;

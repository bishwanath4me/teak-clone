import React, { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";

const menuData = {
  "Decorative Lighting": {
    CHANDELIERS: [
      "All Chandeliers",
      "Luxe Collection",
      "Chandeliers Under 30,000/-",
      "Crystal Collection",
      "Dimmable LED (Built-In) Chandeliers",
      "Double Height Chandeliers",
      "Modern Collection",
      "Chandeliers On Sale",
      "New Arrival Chandeliers",
    ],
    "AESTHETICS BASED COLLECTION": [
      "Modern Design",
      "Mid Century Modern Designs",
      "Floral Designs",
      "Vintage Designs",
    ],
    "PENDANT LIGHTS": [
      "All Pendant Lights",
      "Rattan / Wood Pendants",
      "LED Pendants",
      "Glass Pendants",
      "Pendants On Sale",
      "New Arrival Pendants",
    ],
    "CEILING LIGHTS": [
      "All Ceiling Lights",
      "LED (Built-In) Ceiling Lights",
      "Dimmable LED (Built-In) Ceiling Lights",
      "Gold Ceiling Lights",
      "Kid's Room Ceiling Lights",
      "New Arrival Ceiling Lights",
    ],
    "WALL LIGHTS": [
      "All Wall Lights",
      "Vanity / Mirror Wall Lights",
      "LED Wall Lights",
      "Picture Wall Lights",
      "Kid's Room Wall Lights",
      "Outdoor Wall Lights",
      "New Arrival Wall Lights",
    ],
    "OUTDOOR LIGHTS": [
      "All Outdoor Lights",
      "Outdoor Wall Lights",
      "Gate Lights",
      "Garden Lights",
      "New Arrival Outdoor Lights",
    ],
    "TABLE LAMPS": [
      "All Table Lamps",
      "Ceramic Collection",
      "Gold Collection",
      "Luxe Collection",
      "A Touch Of Marble",
      "Desk / Study Lamps",
      "Table Lamps On Sale",
      "New Arrival Table Lamps",
    ],
    "FLOOR LAMPS": [
      "All Floor Lamps",
      "Floor Lamps On Sale",
      "New Arrival Floor Lamps",
    ],
  },
  "Designer Lights": {
    "IKEBANA COLLECTION": [
      "All Series",
      "Midori Series",
      "Harubana Series",
      "Konoha Series",
    ],
  },
  "Home Decor": {
    "DECOR ACCENTS": ["All Decors", "Sculptures", "Artifacts", "Mirrors"],
    VASES: [
      "All Vases",
      "Table Vases",
      "Floor Vases",
      "Ceramic Vases",
      "Glass Vases",
    ],
    "DECOR ACCESSORIES": [
      "Planters",
      "Trays & Baskets",
      "Candle Holders",
      "Decorative Boxes",
      "Wine and Magazine Holder",
      "Flask and Carafe",
      "Tissue Boxes",
      "Lanterns",
    ],
    "WALL DECOR": ["Paintings", "Wall Art", "Clock"],
  },
  "Architectural Lighting": {
    Lighting: [
      "New Arrival Architectural Lights",
      "LED COB Downlight",
      "LED Tunable and Dimmable COB Downlights",
      "LED Tiltable Downlights",
      "LED Panels",
      "LED Modules and Rings",
      "LED Surface Mounted Downlights",
      "LED Track Lights and Components",
      "LED Magnetic Lights and Components",
      "LED Profile Lights",
      "LED Strip Lights",
      "LED Battens",
      "LED Designer Series",
    ],
  },
  "Ceiling Fans": {
    Fans: [
      "All Ceiling Fans",
      "Wood / ABS Ceiling Fans",
      "Chandelier Ceiling Fans",
    ],
  },

  "Store Locator": { "Available-Store": ["Delhi", "Pune"] },
  More: { "Know-More": ["Contact Us", "Return & Exchanges", "Track Order"] },
};

const Botomheader = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileSubMenu = (category) => setMobileActiveMenu(mobileActiveMenu === category ? null : category);
  const toggleNestedSubMenu = (sub) => setMobileSubMenu(mobileSubMenu === sub ? null : sub);

  return (
    <nav className="mega-menu">
      <div className="menu-header">
        <button className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "✖" : "☰"}
        </button>
        
      </div>
      <ul className={`menu-list ${isMobileMenuOpen ? "open" : ""}`}>
        {Object.keys(menuData).map((category) => (
          <li
            key={category}
            className="menu-item"
            onMouseEnter={() => setActiveMenu(category)}
            onMouseLeave={() => setActiveMenu(null)}
            onClick={() => toggleMobileSubMenu(category)}
          >
            {category}<span>▼</span>
            {activeMenu === category && window.innerWidth > 768 && (
              <div className="submenu">
                <div className="Sumenu-list">


                  {Array.isArray(menuData[category]) ? (
                    <ul>
                      {menuData[category].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    Object.keys(menuData[category]).map((sub) => (
                      <div key={sub} className="submenu-category">
                        <h4>{sub}</h4>
                        <ul>
                          {menuData[category][sub].map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
            {mobileActiveMenu === category && window.innerWidth <= 768 && (
              <div className="mobile-submenu">
                {Array.isArray(menuData[category]) ? (
                  <ul>
                    {menuData[category].map((item) => (
                      <li key={item}>`${item}`</li>
                    ))}
                  </ul>
                ) : (
                  Object.keys(menuData[category]).map((sub) => (
                    <div key={sub}>
                      <h4 onClick={() => toggleNestedSubMenu(sub)}>{sub} ▼</h4>
                      {mobileSubMenu === sub && (
                        <ul>
                          {menuData[category][sub].map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))
                )}
                
              </div>

            )}
          </li>
        ))}
      </ul>

      <div className="search-container">
        <input type="text" placeholder="Search..." name="search" className="search-input" />
        <button className="search-button"><IoSearchCircle/></button>
      </div>
    </nav>
  );
};

export default Botomheader;

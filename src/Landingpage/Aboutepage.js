import React, { useState, useEffect, useRef } from "react";

const Aboutepage = () => {
  const images = [
    "https://www.whiteteak.com/media/customimages/homepage/DL%20Sub%20categories/DL_outdoorlights.jpg",
    "https://www.whiteteak.com/media/customimages/homepage/DL%20Sub%20categories/DL_chandeliers.jpg",
    "https://www.whiteteak.com/media/customimages/homepage/DL%20Sub%20categories/DL_pendants.jpg",
    "https://www.whiteteak.com/media/customimages/homepage/DL%20Sub%20categories/DL_walllights.jpg",
    "https://www.whiteteak.com/media/customimages/homepage/DL%20Sub%20categories/DL_tablelamps.jpg",
    "https://www.whiteteak.com/media/customimages/homepage/DL%20Sub%20categories/DL_floorlamps.jpg",
  ];

  const imagesnew = [
    "https://www.whiteteak.com/media/customimages/homepage/home-page-bottom-banners_2_.jpg",
    "https://www.whiteteak.com/media/customimages/homepage/home-page-bottom-banners-furniture1.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
   

  const startSliding = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
  };


  const stopSliding = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  };


  const moveLeft = () => {
    stopSliding();
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.5s ease-in-out";
      trackRef.current.style.transform = `translateX(-100%)`;
      setTimeout(() => {
        trackRef.current.appendChild(trackRef.current.firstElementChild);
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = `translateX(0)`;
        startSliding();
      }, 500);
    }
  };


  const moveRight = () => {
    stopSliding();
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.5s ease-in-out";
      trackRef.current.style.transform = `translateX(100%)`;
      setTimeout(() => {
        trackRef.current.prepend(trackRef.current.lastElementChild);
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = `translateX(0)`;
        startSliding();
      }, 500);
    }
  };

  useEffect(() => {
    startSliding();
     
  }, []);

  return (
    <div>
      <div className="decorative-light-container">
        <div className="decorative-light-content">
          <div className="text-section">
            <p className="title-light">
              <span>Decorative Light</span>
            </p>
            <p className="description">
              <span>
                Experience the harmony of high-end designs that tie your home
                together and materials that complement your style. Embrace the
                thrill of a creative process that’s experimental in a lighting
                range that’s the star of your story.
              </span>
            </p>
            <p>
              <button className="discover-btn">Discover</button>
            </p>
          </div>
          <div className="image-section">
            <img
              src="https://www.whiteteak.com/media/wysiwyg/Decorative_lighting.jpg"
              alt="Decorative Lighting"
            />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#efe6e6" }}>
        <div
          className="carousel-container"
          onMouseEnter={stopSliding}
          onMouseLeave={startSliding}
        >

          <div className="carousel-controls">
            <button className="nav-btn left" onClick={moveLeft}>
              &#9665;
            </button>
            <button className="nav-btn right" onClick={moveRight}>
              &#9655;
            </button>
          </div>


          <div className="carousel">
            <div
              className="carousel-track"
              ref={trackRef}
              style={{ animationDuration: "10s" }}
            >
              {[...images, ...images].map((img, i) => (
                <div key={i} className="carousel-item">
                  <img src={img} alt={`Slide ${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="image-gallery">
        <div className="image-container">
          <img
            src="https://www.whiteteak.com/media/wysiwyg/fan_1_.jpg"
            alt="Ceiling Fans"
          />
          <p className="title">
            <span>CEILING FANS</span>
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://www.whiteteak.com/media/wysiwyg/AL.jpg"
            alt="Architectural Lighting"
          />
          <p className="title">
            <span>ARCHITECTURAL LIGHTING</span>
          </p>
        </div>
      </div>

      {/*  */}
      <div className="radioslideshow-container">
        <div className="radioimage-wrapper">
          <img src={imagesnew[currentIndex]} alt="Slideshow" className="radioslide-image" />
        </div>
        <div className="radio-buttons">
          {imagesnew.map((_, index) => (
            <input
              key={index}
              type="radio"
              name="slide"
              checked={currentIndex === index}
              onChange={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      {/*  */}

      <div className="founder">
        <img
          src="https://www.whiteteak.com/media/customimages/homepage/hp_yt_video_template.jpg"
          alt="Architectural Lighting"
        />
      </div>
    </div>
  );
};


export default Aboutepage
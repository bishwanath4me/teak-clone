import React, { useState, useEffect, useRef } from "react";

const imageUrls = [
  "https://www.whiteteak.com/media/customimages/homepage/MB_tablelamps_desk.webp",
  "https://www.whiteteak.com/media/customimages/homepage/MB_luxe_desk.webp",
  "https://www.whiteteak.com/media/customimages/homepage/home-page-main-banner-mirror.jpg",
  "https://www.whiteteak.com/media/customimages/homepage/MB_Branding_desk.webp",
  "https://www.whiteteak.com/media/customimages/homepage/Home_page_main_banner_newarrival.webp",
  "https://www.whiteteak.com/media/customimages/homepage/MB_decor_desk.webp",
];

const BannerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const startAutoSlide = () => {
    stopAutoSlide(); 
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  });

  return (
    <div style={{margin:"2px"}}>
      <div
        className="slideshow-container"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="slide">
          <img
            src={imageUrls[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div style={{ padding:"0px 5px"}} className="card">
        <img
          src={"https://www.whiteteak.com/media/wysiwyg/HP_band_store_1.jpg"} alt=""
        />
        <img
          src={"https://www.whiteteak.com/media/wysiwyg/HP_band_exclusive.jpg"} alt=""
        />
      </div>
    </div>
  );
};

export default BannerSection;

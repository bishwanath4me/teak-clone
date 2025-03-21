import React from "react";

const products = [
  {
    name: "Vanity Light",
    lightimg:
      "https://www.whiteteak.com/media/wysiwyg/Categories_vanityllights.jpg",
  },
  {
    name: "Ceiling Fans",
    lightimg: "https://www.whiteteak.com/media/wysiwyg/Categories_fans.jpg",
  },
  {
    name: "Outdoor Light",
    lightimg:
      "https://www.whiteteak.com/media/wysiwyg/Categories_outdoorlights.jpg",
  },
  {
    name: "Ceiling Light",
    lightimg:
      "https://www.whiteteak.com/media/wysiwyg/Categories_ceilinglights.jpg",
  },
  {
    name: "Home Decor",
    lightimg:
      "https://www.whiteteak.com/media/wysiwyg/Categories_homedecor.jpg",
  },
  {
    name: "Floor Lamps",
    lightimg:
      "https://www.whiteteak.com/media/wysiwyg/Categories_floorlamps.jpg",
  },
  {
    name: "Table Lamps",
    lightimg:
      "https://www.whiteteak.com/media/wysiwyg/Categories_tablelamps.jpg",
  },
  {
    name: "Wall Lights",
    lightimg:
      "https://www.whiteteak.com/media/wysiwyg/Categories_walllights_1.jpg",
  },
  {
    name: "Pendants",
    lightimg: "https://www.whiteteak.com/media/wysiwyg/Categories_pendants.jpg",
  },
  {
    name: "Chandeliers",
    lightimg:
      "https://www.whiteteak.com/media/wysiwyg/Categories_chandeliers_2.jpg",
  },
];

const ProductGallery = () => {
  return (
    <div className="product-container">
      <p style={{ fontSize: "2vw",
    fontWeight: "bold",
    color: "black" , marginBottom: "10px"}}>
        Shop Decorative Lighting, Home Decor & Designer Fans
      </p>
      <div className="product-gallery">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img
              src={product.lightimg}
              alt={product.name}
              className="product-image"
            />
            <p className="product-name">{product.name}</p>
          </div>
        ))}
      </div>
      <div style={{margin:"12px 1px"}}>
        <img
          src={
            "https://www.whiteteak.com/media/customimages/homepage/ikbena_mainbanner.webp"
          }
          alt={""}
          className="product-image"
        />
      </div>

      <div className="scroll-wrapper">
        <div className="scroll-container">
          <img
            src="https://www.whiteteak.com/media/customimages/homepage/Ikebana_midori.webp"
            alt="Cinque Terre"
          />
          <img
            src="https://www.whiteteak.com/media/customimages/homepage/Ikebana_harubana.webp"
            alt="Forest"
          />
          <img
            src="https://www.whiteteak.com/media/customimages/homepage/Ikebana_konoha.webp"
            alt="Northern Lights"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;

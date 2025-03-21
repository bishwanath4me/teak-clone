import React from "react";

const storeData = [
  {
    id: 1,
    name: "Bangalore",
    numberofstore: "2 Store",
    image: "https://www.whiteteak.com/media/customimages/homepage/1store.webp",
  },
  {
    id: 2,
    name: "Mumbai",
    numberofstore: "2 Store",
    image: "https://www.whiteteak.com/media/customimages/homepage/2store.webp",
  },
  {
    id: 3,
    name: "Delhi",
    numberofstore: "2 Store",
    image: "https://www.whiteteak.com/media/customimages/homepage/3store.webp",
  },
  {
    id: 4,
    name: "Hyderabad",
    numberofstore: "2 Store",
    image: "https://www.whiteteak.com/media/customimages/homepage/4.webp",
  },
  {
    id: 5,
    name: "Pune",
    numberofstore: "2 Store",
    image: "https://www.whiteteak.com/media/customimages/homepage/5.webp",
  },
  {
    id: 6,
    name: "Chennai",
    numberofstore: "2 Store",
    image: "https://www.whiteteak.com/media/customimages/homepage/6.webp",
  },
  {
    id: 7,
    name: "Noida",
    numberofstore: "2 Store",
    image: "https://www.whiteteak.com/media/customimages/homepage/7.webp",
  },
  {
    id: 8,
    name: "Ludhiana",
    numberofstore: "2 Store",
    image: "https://www.whiteteak.com/media/customimages/homepage/8.webp",
  },
  {
    id: 9,
    name: "Calicut",
    numberofstore: "2 Store",
    image: "https://www.whiteteak.com/media/customimages/homepage/9.webp",
  },
  {
    id: 10,
    name: "Kolkata",
    numberofstore: "2 Store",
    image: "https://www.whiteteak.com/media/customimages/homepage/10.webp",
  },
];

const StoreGallery = () => {
  return (
    <div className="Store-container">
      <div className="Store-heade">
        <p>
          25+ <span>Experience Stores Across India</span>
        </p>
        <span>Explore All Store</span>
      </div>
      <div className="gallery-container">
        <div className="gallery">
          {storeData.map((store) => (
            <div key={store.id} className="gallery-item">
              <img src={store.image} alt={store.name} />
              <div className="store-name">
                {store.name} {store.numberofstore}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreGallery;

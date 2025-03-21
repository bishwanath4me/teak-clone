import React from 'react'
import BannerSection from './Bannersection'
import ProductGallery from './ProductGallery'
import StoreGallery from './StoreGallery'

import FooterSection from './FooterSection'

import "./landingpage.css";
import Aboutepage from './Aboutepage'

const Landingroot = () => {
  return (
    <div>
    <BannerSection />
    <ProductGallery />
    <StoreGallery />
    <Aboutepage />
    <FooterSection />
  </div>
  )
}

export default Landingroot
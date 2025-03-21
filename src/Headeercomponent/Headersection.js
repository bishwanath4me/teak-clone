import React from 'react'
import './Header.css'
import Topheader from './Topheader'
import Botomheader from './Botomheader'
import Midheader from './Midheader'
import Landingroot from '../Landingpage/Landingroot'

const Headersection = () => {
    return (
        <div>
            <div className="Topheader">
           < Topheader />
            </div>
            <div style={{position:'sticky', top:'0px', zIndex:10000}}>

            <div className='Midheader'>

                <Midheader />
            </div>
            <div className='Botomheader'>

                <Botomheader />
            </div>
            </div>
            <Landingroot/>
        </div>
    )
}

export default Headersection
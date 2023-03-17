import React from 'react'
import './HeroSection.css';
import King from './Images/KingRobert.JPG'

function HeroSection() {
  return (
    <div>
        <div className='hero__container mt-20 '>
            <div className='hero__text mx-auto'>
            <h1>
                Goodbye <span>Colored,</span> <br/> Black Is Risen
            </h1>
            <h5>So, here you are, too foreign for home, too foreign for here. Never enough for both. Start now. Start where you are. Start with fear. Start with pain. Start with doubt. Start with hands shaking. Start with voice trembling but start. Start and don't stop. Start where you are, with what you have. Just... start ~ 'Start Now' By <span className='author'>Ijeoma Umebinyuo</span></h5>
            <button className='btn'>Black Excellence</button>
            </div>
            <div className='img__column mx-auto'>
                <img src={King} alt='King Robert' className='king-img'/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
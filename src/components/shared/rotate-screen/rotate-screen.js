import React from 'react';
import './rotate-screen.scss';
import RotateArrow from '../../../assets/svg/arrow-rotate.svg'

export const RotateScreenComponent = () => {
    return (
        <div className={'rotate-screen'}>
            <img className={'rotate-screen_icon'} src={RotateArrow} alt='Rotate Arrow'/>
            <p className={'rotate-screen_text'}>flip your screen horizontally for better experience</p>
        </div>
    )
}
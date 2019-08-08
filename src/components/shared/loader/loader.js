import React from 'react';
import './loader.scss';
import Logo from '../../../assets/svg/Mike Basgrow-LOGO-HAND-art_01.svg';
import Arrow from '../../../assets/svg/arrow-accent.svg';

export const LoaderComponent = () => {
    return (
        <div className={'loader_container'}>
            <img className={'loader_img'} src={`${Logo}?${(new Date()).getTime()}`} alt='Logo Animation'/>
    
            <a href='#home'>
                <img className={'arrow_img'} src={`${Arrow}?${(new Date()).getTime()}`} alt='Arrow Animation'/> 
            </a>
        </div>
    )
}
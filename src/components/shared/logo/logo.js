import React from 'react';
import './logo.scss';
import MBlogoAnimation from '../../../assets/svg/Mike Basgrow - LOGO-HAND - art_01.svg';
import MBlogoStatic from '../../../assets/svg/Mike Basgrow - LOGO-HAND - art_02_static.svg';

export const LogoComponent = (props) => {
    return (
        <div className={`art-logo-animation art-logo-${props.type}`}>
            {
                 props.static 
                 ? 
                 <img src={`${MBlogoStatic}?${(new Date()).getTime()}`} alt="Mike Basgrow - Artsky Studio Animations"/>
                 :
                 <img src={`${MBlogoAnimation}?${(new Date()).getTime()}`} alt="Mike Basgrow - Artsky Studio Animations"/>
                
            }
            
        </div>
    );
}
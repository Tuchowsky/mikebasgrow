import React from 'react';
import './vinyl-animation.scss';
import Vinyl from '../../../assets/svg/vinyl-icon.svg';
import Mixer from '../../../assets/svg/mixer-icon.svg';

export const VinylAnimationComponent = () => {
    return (
        <div className={'vinyl'}>
            <div className={'vinyl-animation_container'}>
                <div className={'vinyl-animation_wrapper'}>
                    <img src={Vinyl} alt='Art Vinyl Animation'/>
                </div>
            </div>
            <div className={'mixer'}>
                <img src={Mixer} alt='Art Vinyl Animation'/>
            </div>
            
            <div className={'vinyl-animation_container'}>
                <div className={'vinyl-animation_wrapper'}>
                    <img src={Vinyl} alt='Art Vinyl Animation'/>
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import './background-change-blur.component.scss'

export const BackgroundChangeBlurComponent = () => {

    return (
        <div className='background-blur'>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="blur">
                        <feGaussianBlur stdDeviation="5" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}
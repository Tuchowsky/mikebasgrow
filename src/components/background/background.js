import React from 'react';
import './background.scss';

const BackgroundComponent = () => {
    return (
        <div className='main-background'>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="blur">
                    <feGaussianBlur stdDeviation="5" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}

export default BackgroundComponent;
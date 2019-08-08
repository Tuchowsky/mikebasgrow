import React from 'react';
import './text-item.component.scss';



export const TextItemComponent = (props) => {
    return (
        <div className={`text-item-container item-container_${props.size} bg-${props.bgColor} order-${props.bgColor}`}>
            <img className='text-item_photo' src={props.photo} alt={props.quoteText}/>
            <h3 className='text-item_header-text'>{props.headerText}</h3>
            <p className='text-item_quote-text'>{props.quoteText}</p>
            <div className='art-mask'>
                <svg className='filter-mask'>
                    <filter id="blur">
                        <feGaussianBlur stdDeviation="5" />
                    </filter>
                </svg>
            </div>
        </div>
    )
}
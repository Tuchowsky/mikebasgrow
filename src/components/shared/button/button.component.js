import React from 'react';
import './button.component.scss';

export const ButtonComponent = (props) => {
    return (
        props.link
        ?
        <a href={props.link} className={`link-button button-art-${props.type} shadow-8dp`}>{props.btnText}</a>
        :
        ''
    )
}
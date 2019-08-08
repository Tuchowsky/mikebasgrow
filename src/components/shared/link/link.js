import React from 'react';
import './link.scss';

export const LinkComponent = (props) => {
    return (
        props.link
        ?
        <a onClick={props.onClick} href={props.link} target={props.target} rel="noopener noreferrer" className={`link link-art-${props.type}`}>{props.linkText}</a>
        :
        ''
    );
}
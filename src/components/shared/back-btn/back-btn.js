import React from 'react';
import './back-btn.scss'
import { NavLink } from 'react-router-dom';
import Arrow from '../../../assets/svg/arrow.svg';

export const BackBtnComponent = () => {
    return (
        <div className={'back-btn art_absolute'}>
            <img  className={'back-btn_icon'} src={Arrow} alt='Back Arrow' />
            <NavLink className={'back-btn_link'} aria-current="page" to='/'>
                Back
            </NavLink>
        </div>
    )
}
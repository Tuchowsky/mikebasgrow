import React from 'react';
import './menu.scss';
import { NavLink } from 'react-router-dom';

export const MenuComponent = (props) => {
    // const YCAmenu = [
    //     'Home',
    //     'O nas',
    //     'Oferta',
    //     'Kontakt'
    // ];

    // const basgrowMenu = [
    //     'Home',
    //     'Koncerty',
    //     'Bio',
    //     'Muzyka',
    //     'Kontakt'
    // ];

    const basgrowMenuEN = [
        {
            link: 'home',
            text: 'Home'
        },
        {
            link: 'events',
            text: 'Eventy' 
        },
        {
            link: 'bio',
            text: 'Bio' 
        },
        {
            link: 'video',
            text: 'Video' 
        },
        {
            link: 'booking',
            text: 'Booking' 
        }
    ];

    const menuHandler = (e) => {
        props.menuIsOpen(false, e)
     }
    return (
        <nav className={`menu_container ${props.isOpen ? 'menu-open': 'menu-closed'}`}>
            <div className={`menu-backdrop`}></div>
            <ul className={'menu-list'}>
                {
                    basgrowMenuEN.map( (item, index) => 
                        <li key={index} className={'menu-list-item'}>
                            <a onClick={menuHandler} className={'menu-list-link'} href={`#${item.link}`}>{item.text}</a>
                        </li>
                    )
                }
                <NavLink className='menu-list-item gallery_btn' to='/gallery' aria-current="page">
                    <span className={'menu-list-link pointer-disabled'}>Galeria</span>
                </NavLink>
            </ul>
        </nav>
    );
}


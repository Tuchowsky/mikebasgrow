import React, {useState} from 'react';
import './navigation.scss';
import Logo from '../../assets/svg/Mike Basgrow-LOGOTYPE-web_transparent-white.svg';
import { MenuComponent } from '../shared/menu/menu';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuHandler = () => {
        setIsOpen(!isOpen);
    }

    const childMenuHandler = (isOpen, e) => {
        setIsOpen(isOpen);
    }
    
    return (
        <header className='header'>
            <div className='logo-container'>
                <a href='https://mikebasgrow.pl/'>
                  <img className='logo-img' src={Logo} alt='logo'/>
                </a>
            </div>
            <div 
                onClick={menuHandler}
                className={`navigation-button ${isOpen ? 'style-dark' : 'style-light'}`}>
                <div className={`art-menu-item line ${isOpen ? 'rotate-left' : ''}`}></div>
    
                {
                    isOpen 
                    ?   <div className={`art-menu-item text close-menu ${!isOpen ? 'none-hidden' : ''}`}>close</div>
                         
                    : <div className={`art-menu-item text ${isOpen ? 'hidden' : ''}`}>menu</div>
                }
                
                <div className={`art-menu-item line ${isOpen ? 'rotate-right' : ''}`}></div>
            </div>

            <MenuComponent menuIsOpen={childMenuHandler} isOpen={isOpen}/>
        </header>
    )
}

export default Navigation;
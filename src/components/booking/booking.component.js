import React, {useState} from 'react';
import './booking.component.scss';
import ArtskyStudioLogo from '../../assets/artsky-studio-main-logo-small-black-white-mike-basgrow.png';
import MBlogoAnimation from '../../assets//svg/Mike Basgrow - LOGO-HAND - art_01.svg';

export const BookingComponent = () => {
    const ArtskyStudioSocial = 'https://www.facebook.com/ArtskyStudio-298413470822242';
    const ArtskyStudioText = 'Artsky Studio Graphic Design';
    const [myDate, setMyDate] = useState((new Date()).getTime());

    const getNewDate = () => {
        setMyDate((new Date()).getTime());
    }

    return (
        <div id='booking' className='booking_container'>
            <div className='booking-info_wrapper'>

                <div className='booking-info_text'>
                    <h1>
                        Booking
                    </h1>
                    <a href="mailto:mike.basgrow@gmail.com? subject=Slot Book">mike.basgrow@gmail.com</a>
                    <a href="tel:+48 501876044">+48 501 876 044</a>
                </div>
            </div>

            <div className='graphic-studio-social'>
                <a className='social-link' href={ArtskyStudioSocial} rel="noopener noreferrer" target='_blank'>
                    <img className='social-link-icon' src={ArtskyStudioLogo} alt={ArtskyStudioText}/>
                </a>
            </div>

            <div className="art-wrapper-footer">
                <div className="">
                    <img 
                        onClick={getNewDate}
                        src={`${MBlogoAnimation}?${myDate}`} 
                        alt="Mike Basgrow - Artsky Studio Animations"/>
                </div>
            </div>
        </div>
    );
}
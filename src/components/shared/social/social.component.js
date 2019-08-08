import React from 'react';
import './social.component.scss';
import MikeBasgrowFacebook from '../../../assets/svg/MikeBasgrow-facebook.svg';
import MikeBasgrowInstagram from '../../../assets/svg/MikeBasgrow-instagram.svg';
import MikeBasgrowFacebookDark from '../../../assets/svg/MikeBasgrow-facebook-dark.svg';
import MikeBasgrowInstagramDark from '../../../assets/svg/MikeBasgrow-instagram-dark.svg';


export const SocialComponent = (props) => {

    const MBsocial = [
        {
            link: 'https://www.instagram.com/mike.basgrow/',
            icon: MikeBasgrowInstagram,
            iconDark: MikeBasgrowInstagramDark,
            text: 'Mike Basgrow Instagram',
            class: 'instagram'
        }, 
        {
            link: 'https://www.facebook.com/mikebasgrow/',
            icon: MikeBasgrowFacebook,
            iconDark: MikeBasgrowFacebookDark,
            text: 'Mike Basgrow Facebook',
            class: 'facebook'
        }
    ]


    return (
        <div className='social_container'>
            <div className='mike-basgrow-social'>
                <ul className='social-list'>
                    {
                        MBsocial.map((item, index) => {
                            return (
                                <li className='social-list-item' key={index}>
                                    <a className={`social-link`} href={item.link} rel="noopener noreferrer" target='_blank'>
                                        <img className={`social-link-icon ${item.class}`} src={item.icon} alt={item.text}/>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
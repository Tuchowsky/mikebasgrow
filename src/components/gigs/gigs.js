import React, {useEffect, useState} from 'react';
import './gigs.scss';
import Carousel from 'react-spring-3d-carousel';
import uuidv from 'uuid';
import { ButtonComponent } from './../shared/button/button.component';
import { VinylAnimationComponent } from '../shared/vinyl-animation/vinyl-animaiton';


export const GigsComponent = () => {

    const events = 'Eventy';
    const gigs = [
          {
            gigName: 'Museum / 31.08',
            gigArtists: 'DJ Set',
            gigPlace: 'Bytom',
            gigLink: 'https://www.facebook.com/mikebasgrow/',
            gigTickets: ''
          },
          {
            gigName: 'Homiez / 10.08',
            gigArtists: 'DJ Set',
            gigPlace: 'Gdańsk',
            gigLink: 'https://www.facebook.com/mikebasgrow/',
            gigTickets: ''
          },
          {
            gigName: 'Klub EGO / 16.08',
            gigArtists: 'Mike Basgrow & DJ SL',
            gigPlace: 'Sopot',
            gigLink: 'https://www.facebook.com/mikebasgrow/',
            gigTickets: ''
          },
          {
            gigName: 'Kraków Live Festival / 17.08',
            gigArtists: 'Mike Basgrow & DJ Snaap',
            gigPlace: 'Kraków',
            gigLink: 'https://www.facebook.com/events/256773145181231/',
            gigTickets: ''
          },
          {
            gigName: 'Rewers / 30.08',
            gigArtists: 'DJ Set',
            gigPlace: 'Bielsko-Biała',
            gigLink: 'https://www.facebook.com/mikebasgrow/',
            gigTickets: ''
        }
    ];

// slide items
    const [slides, setSlides] = useState([]);

      useEffect(() => {
          const newSlides = [];
          gigs.map((item, index) => {
            newSlides.push(
              {
                key: uuidv(),
                content:  <div key={`gig-item-${index}`} className='gig-item'>
                            <h1 className='head-text'>{item.gigName}</h1>
                              {
                                item.gigArtists && <h2 className='artists-text'>{item.gigArtists}</h2>
                              }
                              <h5 className='club-text'>{item.gigPlace}</h5>
                              {
                                item.gigLink ? <ButtonComponent link={item.gigLink} type={'dark'} btnText={'Szczegóły'}/> : ''
                              }
                          </div>
              }
            )

            return false;
          });
          setSlides(newSlides);
          const navigation = document.querySelector('.css-1qzevvg');
          navigation.classList.add('art-carousel_container');

      }, []);

    return (
      <div id={'events'} className={'gigs-animation_container'}>
        <div className={'vinyl_container'}> 
        <h2 className={'gigs-head_text'}>{events}</h2>
          <VinylAnimationComponent/>
        </div>
        <div className='gigs_container'>
            <Carousel className={'carousel_container'} slides={slides} goToSlide={1} offsetRadius={2} showNavigation={true}/>
        </div>
      </div>
    );
}
import React from 'react';
import './page-wrapper.scss';
import { GigsComponent } from '../gigs/gigs';
import { MusicComponent } from './../music/music';
import { AboutComponent } from './../about/about';
import { BookingComponent } from './../booking/booking.component';
import { BackgroundChangeBlurComponent } from './../shared/background-change-blur/background-change-blur.component';
import { SocialComponent } from './../shared/social/social.component';


class PageWrapperComponent extends React.Component {
    render() {
        return (
            <main className={'main-sections_container'}>
                <BackgroundChangeBlurComponent/>
                <GigsComponent/>
                <AboutComponent/>
                <MusicComponent/>
                <BookingComponent/>
                <SocialComponent/>
            </main>
        )
    }
}

export default PageWrapperComponent;
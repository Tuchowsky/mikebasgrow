import React from 'react';
import './welcome-wrapper.scss';
import { LoaderComponent } from '../shared/loader/loader';
import { HomeWelcome } from '../home/home-welcome/home-welcome';



export const WelcomeWrapperComponent = () => {
    return (
        <main className={'welcome-sections_container'}>
            <LoaderComponent/>
            <HomeWelcome/>
            {/* <ButtonComponent link={'#gigs'} type={'transparent'} btnText={'więcej'}/> */}
        </main>
    )
}
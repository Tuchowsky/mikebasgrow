import React from 'react';
import './home.scss';

import BackgroundComponent from '../background/background';
import { ButtonComponent } from '../shared/button/button.component';
export const Home = () => {

    return (
        <section className='home section-wrapper'>
            <BackgroundComponent />
            <h1>Tutaj</h1>
            <ButtonComponent link={'#gigs'} type={'transparent'} btnText={'więcej'}/>
        </section>
    )
}

export default Home;
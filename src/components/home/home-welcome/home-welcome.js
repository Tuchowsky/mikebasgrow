import React from 'react';
import './home-welcome.scss';
import { ButtonComponent } from '../../shared/button/button.component';
import { BackgroundChangeComponent } from '../../shared/background-change/background-change.component';

export const HomeWelcome = () => {  
    return (
        <div id='home' className='home-welcome'>
            <BackgroundChangeComponent/>
            <ButtonComponent link={'#events'} type={'transparent'} btnText={'więcej'}/>
        </div>
    )
}
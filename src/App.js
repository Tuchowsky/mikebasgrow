import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

import { GalleryComponent } from './components/gallery/gallery';
import { PortfolioComponent } from './components/portfolio-page/portfolio';


const App = () => {
  return (
    <BrowserRouter>
      <div className='mike-basgrow-app'>
        <Route render={({location}) => (
          <TransitionGroup className={'transition_container'} >
            <CSSTransition
              key={location.key}
              timeout={350}
              classNames='slide'>
              <Switch location={location}>
                <Route path="/" component={PortfolioComponent} exact/>
                <Route path="/gallery" component={GalleryComponent}/>
                {/* <Route path="/contact" component={Contact}/> */}
                {/* <Route component={Error404}/> */}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}/>

      </div>
    </BrowserRouter>
  );
}

export default App;

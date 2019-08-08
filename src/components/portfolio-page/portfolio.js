import React from 'react';
import './portfolio.scss';
import Navigation from '../navigation/navigation';
import { WelcomeWrapperComponent } from '../welcome-wrapper/welcome-wrapper';

const PageWrapper = React.lazy(() =>
    import ('../page-wrapper/page-wrapper')
);

export const PortfolioComponent = () => {

    return (
        <div className={'portfolio_container'}>
            <Navigation />
            <WelcomeWrapperComponent />
            
            <React.Suspense fallback={'.....Loading'}>
                <PageWrapper />
            </React.Suspense>
        </div>
    )
}
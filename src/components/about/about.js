import React, { useState } from 'react';
import './about.scss';
import { LogoComponent } from '../shared/logo/logo';
import { LinkComponent } from '../shared/link/link';

export const AboutComponent = () => {

    const bioHead = '';
    // const bioHead = 'Mike Basgrow to producent, turntablista, \n party rocker, organizator eventów.';
    const bioQuote1 = 'Na swoim koncie ma występy w całej Polsce, Anglii, Czechach oraz Chorwacji. Zagrał się na takich festiwalach jak Opener Festival czy Kraków Live Festival. Dzielił scenę ze śmietanką polskiego Hip-Hopu - m.in. z O.S.T.R., Grubson, Tede, Quebonafide, Pokahontaz, Taco Hemingway, Sarius, Otsochodzi oraz topowymi artystami muzyki popularnej np. Kamil Bednarek, Mesajah, Margaret, Donatan i Cleo.';
    const bioQuote2 = 'Współpracował z Tymkiem \nkoncertując po całej Polsce i tworząc płytę pt. „Klubowe”. \nPierwszy singel pt. „Język ciała” osiągnął status potrójnej platynowej płyty, a sam krążek zadebiutował na 2 miejscu na Olis-ie. Można go usłyszeć w najważniejszych rozgłośniach radiowych w kraju oraz kanałach muzycznych w TV. ';
    const bioQuote3 = 'Aktualnie skupia się na projektach solowych oraz projekcie CB Radio, który tworzy wraz z C0pikiem. Cel to wprowadzić świeżość na polską scenę tworząc niekonwencjonalną muzykę, która będzie hybrydą ich inspiracji -  zaczynając od muzyki klubowej, kończąc na etnicznej.';
    const bioQuote4 = 'W roli party DJ-a miał przyjemność gościć w wielu klubach w całym kraju mi.in. Mewa Towarzyska, Protokultura, Tkacka, Czekolada (Poznań), Frantic, Rura, Mardi Grass, Heca, Drugie Dno, Oko Miasta / Królestwo, Cooler, Prime, Fabryka Porcelany / P23,  Imprezy z jego udziałem to elegancki mix utrzymany w klimacie „urban music” – m.in. Rap, Trap, Twerk, Moombahton, Afrobeats, Tropical Bass, R’n’B czy nowoczesna muzyka popularna.';
    const readMore = 'Czytaj więcej';
    const hide = 'Ukryj';

    const [isOpen, setIsOpen] = useState(false);

    const toggleBox = () => {
        setIsOpen(!isOpen);
    }

    const hideBox = () => {
        setIsOpen(false);
    }
    
    return (
        <section id='bio' className='about_conainer'>
            <div className={'about-name_container'}>
                <LogoComponent static={true} type={'normal'}/>
            </div>
            <div className={'about-bio_container'}>
                <h1 className={'about-bio_head'}>
                    {bioHead}
                </h1>
                <div className={'about-bio_quote-wrapper'}>
                    <p className={'about-bio_quote'}>{bioQuote1}</p>
                    <p className={'about-bio_quote'}>{bioQuote2}</p>
                </div>
                <div className={'about-bio_animation'}>
                    {
                        !isOpen 
                        ?
                            <LinkComponent target='' link='javascript:void(0)' onClick={toggleBox} type='light' linkText={readMore}/>
                        :
                            <LogoComponent type={'normal'}/>
                    }
                </div>
                <div className={`about-bio_sub-quote-container ${isOpen ? 'dark-mask' : 'light-mask'}`}>
                    <div className={`about-bio_sub-quote-wrapper box-${isOpen ? 'open' : 'closed'}`}>
                        <p className={'about-bio_sub-quote box-element'}>{bioQuote3}</p>
                        <p className={'about-bio_sub-quote box-element'}>{bioQuote4}</p>
                    </div>
                    {
                        isOpen && <LinkComponent target='' link='javascript:void(0)' onClick={hideBox} type='light' linkText={hide}/>
                    }
                </div>
            </div>
        </section>
    )
}

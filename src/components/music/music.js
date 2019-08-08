import React, {useEffect, useState} from 'react';
import './music.scss';
import Arrow from '../../assets/svg/arrow.svg';

export const MusicComponent = () => {
    const musicVideos = [
        {
            headText: 'Showcase Live',
            videoUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmikebasgrow%2Fvideos%2F1426254370836950%2F&show_text=0&width=560'
        },
        {
            headText: 'RedBull 3Style Submission',
            videoUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmikebasgrow%2Fvideos%2F384358588934427%2F&show_text=0&width=560'
        },
        {
            headText: 'Dj Duda & Mike Basgrow',
            videoUrl: 'https://www.youtube.com/embed/X0XswY5m8Jw'
        },
        {
            headText: 'Maschine Freestyle',
            videoUrl: 'https://www.youtube.com/embed/PJSnP0Udg-w'
        }
    ];

    const [loadVideos, setLoadVideos] = useState(false);
    const [containerWidth, setContainerWidth] = useState(0);
    const [left, setLeft] = useState(0);
    const [padding, setPadding] = useState(0);
    const [disableBack, setDisableBack] = useState(false);
    const [disableForward, setDisableForward] = useState(false);
    const breakpoint = 992;

    const setPosition = () => {
        if(left <= 0 && window.innerWidth > breakpoint) {
            setTimeout(() => {
                const videoContainer = document.querySelector('.music_video-wrapper');
                const width = videoContainer.getBoundingClientRect().width.toFixed(0);
                const paddingWidth = ((window.innerWidth - (window.innerWidth * .7))/2) / musicVideos.length;
                setPadding(paddingWidth);
    
                setContainerWidth(width / musicVideos.length);
                setLeft(-width / 2 + window.outerWidth / 2);
                if(left <= -((containerWidth - padding) / 2) + 1) {
                    setDisableBack(true);
                }
                if(left === 0) {
                    setDisableBack(true);
                    setDisableForward(false);
                }
            }, 500);
        }
        if(window.innerWidth <= breakpoint) {
            setLeft(0);
        }

        if(window.innerWidth > breakpoint) {
            setTimeout(() => {
                const videoContainer = document.querySelector('.music_video-wrapper');
                const width = videoContainer.getBoundingClientRect().width.toFixed(0);
                const paddingWidth = ((window.innerWidth - (window.innerWidth * .7))/2) / musicVideos.length;
                setPadding(paddingWidth);
  
                setContainerWidth(width / musicVideos.length);
                setLeft(-width / 2 + window.outerWidth / 2);
                if(left <= -((containerWidth - padding) / 2) + 1) {
                    setDisableBack(true);
                }
                if(left === 0) {
                    setDisableBack(true);
                    setDisableForward(false);
                }
            }, 500);
        }
    }

    useEffect(() => {
        setPosition();
        window.addEventListener('resize', setPosition);

        return () => {
            window.removeEventListener('resize', setPosition);
        }
    }, [loadVideos]);

    useEffect(() => {
        let timeout = setTimeout(() => {
            setLoadVideos(true)
        }, 5000);

        return () => {
            clearTimeout(timeout);
        }
    }, []);
    
    const moveForwardHandler = (e) => {
        const paddingWidth = ((window.innerWidth - (window.innerWidth * .7))/2) / musicVideos.length;
        setPadding(paddingWidth);
        const newLeftPosition = left + containerWidth - paddingWidth;
        setLeft(newLeftPosition);
        setDisableBack(false);

        let target = e.target;

        e.target.classList.add('scale-up');

        setTimeout(() => {
            target.classList.remove('scale-up');
        }, 500);

        if(left >= ((containerWidth - paddingWidth) / 2) - 1) {
            setDisableForward(true);
        }
    }
    const moveBackHandler = (e) => {
        const paddingWidth = ((window.innerWidth - (window.innerWidth * .7))/2) / musicVideos.length;
        setPadding(paddingWidth);
        const newLeftPosition = left - containerWidth + paddingWidth;
        setLeft(newLeftPosition);
        setDisableForward(false);

        let target = e.target;

        e.target.classList.add('scale-up');

        setTimeout(() => {
            target.classList.remove('scale-up');
        }, 500);

        if(left <= -((containerWidth - paddingWidth) / 2) + 1) {
            setDisableBack(true);
        }
    }

    return (
        <section id='video' className='music_container'>
            {             
                !loadVideos 
                ?
                <div className={'music_video-wrapper'}><p className={'loading-text'}>Loading.....</p></div>
                :
                <div className={'music_video-wrapper'}
                style={{left: -left}}>
                    {
                        musicVideos.map((item, index) => 
                            <div key={index}
                                className={'video-item'}>
                                <h2 className={'video-item_head-text'}>{item.headText}</h2>
                                <iframe 
                                    title={index}
                                    key={index}
                                    className={'video-iframe'}
                                    width="560" 
                                    height="315" 
                                    src={item.videoUrl} 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        )
                    }
                </div>
            }


            <div className={'video_navigation'}>
                <div onClick={moveBackHandler} className={`navigation_item ${disableBack ? 'hidden' : ''}`}>
                    <img className={'navigation_icon arrow-left'} src={Arrow} alt='nav arrow' />
                </div>
                <div onClick={moveForwardHandler} className={`navigation_item ${disableForward ? 'hidden' : ''}`}>
                    <img className={'navigation_icon arrow-right'} src={Arrow} alt='nav arrow' />
                </div>
            </div>
        </section>    
    )
}

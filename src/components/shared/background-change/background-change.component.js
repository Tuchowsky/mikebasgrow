import React, {useState, useEffect} from 'react';
import './background-change.component.scss';
import { MBimagesArr } from '../../../consts/images-carousel';


export const BackgroundChangeComponent = () => {
    const [recentIndex, setRecentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);


    useEffect(() => {
        const interval = setInterval(() => {
            
        setRecentIndex(recentIndex+1);
        setNextIndex(nextIndex+1);

        if(recentIndex >= MBimagesArr.length-1) {
            setRecentIndex(0);
        }

        if(nextIndex >= MBimagesArr.length-1) {
            setNextIndex(0);
        }
        }, 4000);   

        return () => {
            clearInterval(interval);
        };
        
    }, [recentIndex, nextIndex, MBimagesArr.length]);

    return (
        <div className='mike-basgrow-story-image-wrapper'>
            <div className='story-switch image_00' style={{backgroundImage: `url(${MBimagesArr[recentIndex]})`}}></div>
            <div className='story-switch image_01' style={{backgroundImage: `url(${MBimagesArr[nextIndex]})`}}></div>
        </div>
    )
}
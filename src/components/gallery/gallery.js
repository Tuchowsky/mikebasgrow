import React, { useState } from 'react';
import './gallery.scss';
import { BackBtnComponent } from '../shared/back-btn/back-btn';
import { SocialComponent } from './../shared/social/social.component';

import img1 from './../../assets/gallery/Mike_Basgrow_01.png';
import img2 from './../../assets/gallery/Mike_Basgrow_02_GZS-1-6.png';
import img3 from './../../assets/gallery/Mike_Basgrow_03_GZS-1-9.png';
import img4 from './../../assets/gallery/Mike_Basgrow_04.png';
import img5 from './../../assets/gallery/Mike_Basgrow_05.png';
import img7 from './../../assets/gallery/Mike_Basgrow_07.png';
import img8 from './../../assets/gallery/Mike_Basgrow_08_LRM_EXPORT.png';
import img9 from './../../assets/gallery/Mike_Basgrow_09_LRM_EXPORT_20190704.png';
import img10 from './../../assets/gallery/Mike_Basgrow_10_TYMEK_FND_WARSZAWA_05_04.png';
import img11 from './../../assets/gallery/Mike_Basgrow_11_TYMEK_FND_WARSZAWA_05_04.png';
import img12 from './../../assets/gallery/Mike_Basgrow_12_TYMEK_FND_WARSZAWA_05_04.png';
import img13 from './../../assets/gallery/Mike_Basgrow_13.png';
import img14 from './../../assets/gallery/Mike_Basgrow_14.png';
import img15 from './../../assets/gallery/Mike_Basgrow_15.png';
import img16 from './../../assets/gallery/Mike_Basgrow_16.png';
import img17 from './../../assets/gallery/Mike_Basgrow_17.png';
import img18 from './../../assets/gallery/Mike_Basgrow_18.png';
import img19 from './../../assets/gallery/Mike_Basgrow_19.png';
import img20 from './../../assets/gallery/Mike_Basgrow_20.png';
import img21 from './../../assets/gallery/Mike_Basgrow_21.png';
import img22 from './../../assets/gallery/Mike_Basgrow_22.png';
import { RotateScreenComponent } from '../shared/rotate-screen/rotate-screen';

const galleryImgArr = [
    img2,
    img3,
    img4,
    img1,
    img5,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22
];

export const GalleryComponent = () => {
    const [renderArrayToIndex, setRenderArrayToIndex] = useState(2);
    const [isLastElement, setIsLastElement] = useState(false);

    const showMorePhotos = 'Show more photos';
    const noMorePhotos = 'That\'s all. \n More photos coming soon';

    const showMoreHandler = () => {
        const recentImagesCount = renderArrayToIndex + 2;
        setRenderArrayToIndex(recentImagesCount);
        if (recentImagesCount > galleryImgArr.length) {
            setRenderArrayToIndex(galleryImgArr.length);
            setIsLastElement(true);
        }
    }

    return (
        <div className={'gallery_container'}>
            <BackBtnComponent />
            <SocialComponent />
            <RotateScreenComponent />
            {
                galleryImgArr.slice(0, renderArrayToIndex).map((item, index) => 
                    <img className={'gallery_img img-animation'} key={index} src={item} alt='Mike Basgrow Gallery'/>
                )
            }

            {/* <h1>Gallery coming soon...</h1> */}
            {
                isLastElement
                ?
                <h6 onClick={showMoreHandler} className={'gallery_show-more'}>{noMorePhotos}</h6>
                :
                <h6 onClick={showMoreHandler} className={'gallery_show-more'}>{showMorePhotos}</h6>
            }
            

        </div>
    )
}
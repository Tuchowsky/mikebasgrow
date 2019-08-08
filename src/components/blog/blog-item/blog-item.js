import React from 'react';
import './blog-item.scss';

import { LinkComponent } from './../../shared/link/link';

export const BlogItemComponent = () => {
    const photoAltText = 'Mike Basgrow Web';
    const blogItemInfo = {
        date: 'Lipiec 22, 2019',
        blogHead: 'Lorem ipsum dolor sit amet',
        blogText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        blogUrl: '#'
    }
    const linkText = 'Zobacz więcej'

    return (
        <div className={'blog-item_container'}>
            <div className={'blog-item_text-wrapper'}>
                <h4 className={'item_date'}>{blogItemInfo.date}</h4>
                <h2 className={'item_head-text'}>{blogItemInfo.blogHead}</h2>
                <p className={'item_quote-text'}>{blogItemInfo.blogText}</p>
            </div>

            <LinkComponent href={blogItemInfo.blogUrl} linkText={linkText} type={'light'} target={'_blank'}/>
            <img className={'blog-item_img'} src={''} alt={photoAltText}/>
        </div>
    )
}
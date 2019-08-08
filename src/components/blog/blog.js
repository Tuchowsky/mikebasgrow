import React from 'react';
import './blog.scss';
import { BlogItemComponent } from './blog-item/blog-item';

export const BlogComponent = () => {
    return (
        <section className={'blog_container'}>
            <div className={'blog_wrapper'}>
                <BlogItemComponent/>
                <BlogItemComponent/>
                <BlogItemComponent/>
                <BlogItemComponent/>
            </div>
        </section>
    )
}
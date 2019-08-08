import React from 'react';
import './component-library.scss';
import { TextItemComponent } from '../shared/text-item/text-item.component';
import { textItemsResponse, textItemsHalf1Response, textItemsHalf2Response } from '../../consts/text-item.js/text.item';
import { ButtonComponent } from '../shared/button/button.component';

export const ComponentLibrary = () => {
    const darkColor = 'dark';
    const lightColor = 'light';
    const revert = 'revert';
    return (
        <div className='render-container'>
            <div className='text-item-group' style={{marginTop: '200px'}}>
                {
                    textItemsResponse.map((item, key) => 
                        <TextItemComponent key={key} size={'medium'} bgColor={darkColor} photo={item.itemImage} headerText={item.headerText} quoteText={item.quoteText}></TextItemComponent>
                    )
                }
            </div>

            <div className='text-item-group' style={{marginTop: '150px'}}>
                <ButtonComponent type={'dark'} btnText={'Link text'}/>
                <ButtonComponent type={'light'} btnText={'Text Link'}/>
            </div>

            <div className='text-item-group' style={{marginTop: '200px'}}>
                {
                    textItemsHalf1Response.map((item, key) => 
                        <TextItemComponent key={key} size={'large'} bgColor={lightColor} photo={item.itemImage} headerText={item.headerText} quoteText={item.quoteText}></TextItemComponent>
                    )
                }
            </div>

            <div className={`text-item-group order-${revert}`}>
                {
                    textItemsHalf2Response.map((item, key) => 
                        <TextItemComponent key={key} size={'large'} bgColor={lightColor} photo={item.itemImage} headerText={item.headerText} quoteText={item.quoteText}></TextItemComponent>
                    )
                }
            </div>

            <div className='text-item-group'>
                {
                    textItemsHalf2Response.map((item, key) => 
                        <TextItemComponent key={key} size={'large'} bgColor={darkColor} photo={item.itemImage} headerText={item.headerText} quoteText={item.quoteText}></TextItemComponent>
                    )
                }
            </div>
        </div>
    )
}
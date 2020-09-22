import React from 'react';
import './menu_item.styles.scss';


const MenuItem = ({title,size,imageUrl}) => (
    <div className = {`${size} menu-item`}>
        <div className='content'>
           <h3 className='title'>{title.toUpperCase()}</h3>
           <span className='subtitle'>Shop Now</span>
        </div>
    </div>
);

export default MenuItem;
import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu_item.styles.scss';


const MenuItem = ({title,size,imageUrl,linkUrl,history,match}) => (
    <div className = {`${size} menu-item`} onClick={()=> {
        history.push(`${match.url}${linkUrl}`)
    }}>
        <div className='background_img' 
          style={{
              backgroundImage: `url(${imageUrl})`
          }}>
        
        </div>
        <div className='content'>
           <h3 className='title'>{title.toUpperCase()}</h3>
           <span className='subtitle'>Shop Now</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
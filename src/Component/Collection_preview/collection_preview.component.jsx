import React from 'react';
import './collection_preview.styles.scss';
import CollectionItem from '../Collection_item/collection_item.component';

const CollectionPreview = ({title,items}) => 
(
    <div className='collection-preview'>
        <div className='title'>{title.toUpperCase()}</div>
        <div className='preview'>
            {items.filter((item,idx)=> (idx < 4)).map(({id,...otherProperties}) => (
               <CollectionItem key={id} {...otherProperties}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;
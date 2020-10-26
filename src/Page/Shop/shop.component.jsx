import  React, {Component} from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../Component/Collection_preview/collection_preview.component';

class Shop extends Component {
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        } 
    }

    render(){
        return (
            <div>
                {this.state.collections.map(({id,...otherProperties}) => (
                  <CollectionPreview key={id} {...otherProperties}/>
                ))}
            </div>
        )
    }
}

export default Shop;
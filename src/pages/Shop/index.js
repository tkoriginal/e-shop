import React, { useState } from 'react'

import SHOP_DATA from './data'
import CollectionPreview from '../../components/collectionPreview'
const ShopPage =  (props) => {
  const [collections, setCollections] = useState(SHOP_DATA)
  console.log(collections)
  return (<div className='shop-page'>
    {
      collections.map(({ id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>)

}

export default ShopPage
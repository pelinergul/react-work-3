import React from 'react'
import { ImageItem } from './ImageItem'

export const ImageList = ({imagesPlaceholder}) => {
  return (
    <div className='imageList'>
        {imagesPlaceholder.map((image, i)=> {
         return <ImageItem  key={i} image= {image} />;
    })}
    </div>
  )
}

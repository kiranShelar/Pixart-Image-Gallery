import React from 'react'
import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core'
import { SRLWrapper } from 'simple-react-lightbox'


const Gallery = ({photos}) => {
    return (
        <SRLWrapper>
        <div>
           <ImageList cols={3} rowHeight={370}>
               {photos.map((img)=>(
                   <ImageListItem key={img.id} cols={(img.width /1200/3).toFixed(0)} style={{flexGrow : '1'}} >
                       <a href={img.urls.regular}>
                            <img src={img.urls.regular} alt={img.alt_description} style={{height:'100%', minWidth:'100%'}}/>
                       </a>
                       <ImageListItemBar title={img.description} subtitle={img.user.name}></ImageListItemBar>
                   </ImageListItem>
               ))}
           </ImageList>
        </div>
        </SRLWrapper>
    )
}

export default Gallery

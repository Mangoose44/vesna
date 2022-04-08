import React from 'react'
import fishing from '../img/fishing.jpg';
import horse from '../img/horse.jpg';
import palace from '../img/palace.jpeg';
import tiger from '../img/tiger.jpeg';
import gachi from '../img/gachi.jpeg';
import friend from '../img/friend.jpg';
import zombi from '../img/zombi.jpeg';
import potato from '../img/potato.jpeg';
import stone from '../img/stone.jpeg';

const allImages = [
    [fishing, horse, tiger],
    [gachi, friend, zombi],
    [potato, stone, palace]
]

// react: props, state
// react: component
// жизненный цикл компонента

export function PhotoGallery ({ images }) {
    return (
        images.map((e, index) => (
            <div className='photoGallery'>
                {e.map((image, index) => <PhotoGalleryItem image={image} key={index} />)}
            </div>
        ))  
    )
}

export function PhotoGalleryItem ({ image }) {
    return (
        <div className='photo'>
            <img src={image} alt="..." />
        </div>       
    )
}

export function Gallery () {
    return (
        <div className="gallery-container">
            <PhotoGallery images={allImages} />
        </div>
    )
}

export default Gallery
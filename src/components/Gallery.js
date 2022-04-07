import React from 'react'
import fishing from '../fishing.jpg';
import horse from '../horse.jpg';
// import palace from './palace.jpeg';
import tiger from '../tiger.jpeg';
import gachi from '../gachi.jpeg';
import friend from '../friend.jpg';
import zombi from '../zombi.jpeg';
import potato from '../potato.jpeg';
import stone from '../stone.jpeg';

const allImages = [
    [fishing, horse, tiger],
    [gachi, friend, zombi],
    [potato, stone]
]

// react: props, state
// react: component
// жизненный цикл компонента

export function PhotoGallery ({ images }) {
    return (
        images.map((e, index) => (
            <div className='photoGallery'>
                {e.map((image, index) => <PhotoGalleryItem image={image} />)}
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
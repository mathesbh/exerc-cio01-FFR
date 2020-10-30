import React from 'react'
import './ImageArticle.css'

export const ImageArticle = (props) => (
    props.images.map(image => (
        <div className="container">
            <picture className="imageArticle item">
                <img src={image.src} alt={image.alt}/>
            </picture>
        </div>
    ))
)
import React from 'react'
import './ImageArticle.css'

export const MainArticle = (props) => (
    props.contents.map(content => (
        <div className="container">
            <picture className="imageArticle item">
                <img src={content.src} alt={content.alt}/>
            </picture>
            <div className="item">
                <h3>{content.title}</h3>
                <p>{content.content}</p>
            </div>
        </div>
    ))
)
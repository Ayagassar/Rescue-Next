import React, { useState } from "react";

export default function ArticleCards ({ title, description, imageUrl, readMoreUrl}) {
    return (
        <div className="article-card">
            <img src={imageUrl} alt={title} className="article-image" />
            <div className="article-content">
                <h2 className="article-title">{title}</h2>
                <p className="article-description">{description}</p>
                <a href={readMoreUrl} className="read-more" target="_blank" rel="noopener norefferer">Read More</a>
            </div>
        </div>
    )

}
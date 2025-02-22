"use client";
import React from 'react';
import ArticleCard from "../components/articleCard";

export default function ArticlesSection() {
    const articles = [
        {
            title: 'Climate Change and Children',
            description: 'Children are disproportionately affected by climate change, with only 2.4% of global climate finance allocated to child-responsive initiatives. Rising temperatures, extreme weather events, and environmental degradation are disrupting children’s health, education, and future prospects',
            imageUrl: 'https://shopequo.com/cdn/shop/articles/What_Is_Climate_Change_Causes_Impact_on_Humans_and_Animals.png?v=1698979509&width=1600',
            readMoreUrl: '#'
        },
        {
            title: 'Education in Crisis',
            description: 'Education Cannot Wait (ECW) reports that 234 million crisis-affected children and adolescents require urgent support to access quality education. Of these, 85 million are out of school, with refugees, internally displaced children, and girls being the most affected',
            imageUrl: 'https://www.unicef.org/sites/default/files/styles/media_large_image/public/UNI470669.webp?itok=ToMkpEIA',
            readMoreUrl: '#'
        },
        {
            title: 'Child Labor and Exploitation',
            description: 'Child labor and exploitation remain pressing global issues, with millions of children worldwide forced into work that deprives them of their childhood, education, and future opportunities. Below is a detailed exploration of the current state of child labor, its causes, consequences, and ongoing efforts to combat it.',
            imageUrl: 'https://media.npr.org/assets/img/2014/10/10/childlabor_wide-98edd56583ee7d1fcdd6696ff087385fcd30452e.jpg',
            readMoreUrl: '#'
        },
    ]

    return (
      <section className="articles-section">
        <div className="container">
          <h2 className="section-title">Articles and News</h2>
          <div className="articles-grid">
            {articles.map((article, index) => (
              <div key={index} className="article-card">
                <img src={article.imageUrl} alt={article.title} className="article-image" />
                <div className="article-content">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                  <a href={article.readMoreUrl} className="read-more-button">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
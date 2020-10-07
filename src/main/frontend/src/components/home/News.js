import React, { useState, useEffect } from 'react';
import './home.css';

const NEWS_URL =
  'http://newsapi.org/v2/top-headlines?country=se&category=general&apiKey=1cbdee4328ff4e118798fe8218263488';

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(NEWS_URL);
      const data = await response.json();
      setNews(data.articles);
    };

    getNews();
  }, []);

  return (
    <div className="container mt-5 mb-5">
      {news.map((item, key) => {
        const { title, description, author, url } = item;
        return (
          <div
            key={key}
            className="mt-5 mr-5 ml-5 d-flex justify-content-center list-group "
          >
            <h3
              className="bebas-font font-weight-bold "
              style={{ color: '#0C2C54' }}
            >
              {' '}
              {title}
            </h3>
            <h4>{author}</h4>
            <p>{description}</p>

            <a
              href={url}
              className="btn btn-primary rounded-0 bebas-font border-0"
              style={{ backgroundColor: '#6c849c', width: '15%' }}
              target="_blank"
              rel="noopener noreferrer"
              onMouseOver={(e) => (e.target.style.backgroundColor = '#0C2C54')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#6c849c')}
            >
              för mer info
            </a>
          </div>
        );
      })}
    </div>
  );
}

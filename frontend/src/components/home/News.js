import React, { useState, useEffect } from "react";

const NEWS_URL =
  "http://newsapi.org/v2/top-headlines?country=se&category=general&apiKey=1cbdee4328ff4e118798fe8218263488";

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
    <div ClassName="container mt-5">
      <div ClassName="">
      <div ClassName="">
      <h1 ClassName=" m-5 justify-content-middle">Swedish News</h1>
      {news.map((item) => {
        const { source, title, description, author, url } = item;
        return (
          <div key={source.id} className="m-5 d-flex justify-content-center list-group">
            <h3 className=" badge-primary rounded"> {title}</h3>
            <h4>{author}</h4>
            <p>{description}</p>
            <a href={url}>{url}</a>
          </div>
        );
      })}
    </div>
    </div>
    </div>
  );
}

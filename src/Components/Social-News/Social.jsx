import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import '../Social-News/Social.css';
function Social() {

    const [Article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const loadSocialNews = async () => {
        const url = "https://news-hive-my-cors-proxy.onrender.com/api/social-news"; // also a backend cors proxy

        try {
            setLoading(true);
            setError('');
            const response = await fetch(url);
            const data = await response.json();
            // don't confuse in Article and articles.
            // Article is just UseState and articles is the data is getting from API. 
            // Api Gnews I have used.

            if (!data.articles || data.articles.length === 0) {
                setArticle([]);
            } else {
                setArticle(data.articles);
            }
        } catch (err) {
            setError("Failed to load news", err);
        } finally {
            setLoading(false);
        }

    };


    useEffect(() => {
        loadSocialNews();
        const interval = setInterval(loadSocialNews, 60000); // refresh every 60s
        return () => clearInterval(interval);
    }, []);


    if (loading) {
        return <h1 className="loading">Please wait for few sec. <strong>Loading news...</strong></h1>;
    }

    if (error) {
        return <h1 className="loading">Error fetching news.</h1>;
    }

    if (Article.length === 0) {
        return <div>No news available.</div>;
    }


    return (
        <div className='social-container'>
            <h1>Latest Social Media News</h1>
            <div className="social-articles">
                {Article.map((props, idx) => (
                    <div key={idx} className="social-card">
                        <h2>{props.title}</h2>

                        <p>
                            <strong>Source:</strong> {props.source?.name || "Unknown"}
                        </p>
                        {props.image && (
                            <img src={props.image} alt="News" className="social-image" onError={() => {
                                console.warn(`Image blocked or unavailable: ${props.image}`);
                                console.info("Reason: The source server may not allow hotlinking (CORS protection).");
                            }} />
                        )}
                        <p>{props.description || "No description available."}</p>

                        <Link to={props.url} target="_blank" rel="noopener noreferrer">
                            Read more
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Social;

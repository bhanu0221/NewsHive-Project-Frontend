import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../Crypto-News/Crypto.css';

function Crypto() {

    const [Article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const loadCryptoNews = async () => {
        const url = "https://news-hive-my-cors-proxy.onrender.com/api/crypto-news"; // backend proxy 

        try {
            setLoading(true);
            setError(false);
            const response = await fetch(url);
            const data = await response.json();  
            // don't confuse in Article and articles.
            // Article is just UseState and articles is the data is getting from Gnews API. 

            if (!data.articles || data.articles.length === 0) {
                setArticle([]);
            } else {
                setArticle(data.articles);
            }
        } catch (error) {
            console.error("News fetch error:", error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadCryptoNews();
        const interval = setInterval(loadCryptoNews, 50000); //refresh in every 50 sec
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
        <div className="crypto-container">
            <h1>Latest Crypto News</h1>
            {Article.map((props, idx) => (
                <div key={idx} className="crypto-news-articles">
                    <h2>{props.title}</h2>
                    <p>
                        <strong>Source:</strong> {props.source?.name}
                    </p>
                    {props.image && (
                        <img src={props.image} alt="news" className="crypto-news-image" onError={() => {
                            console.warn(`Image blocked or unavailable: ${props.image}`);
                            console.info("Reason: The source server may not allow hotlinking (CORS protection).");
                        }} />
                    )}
                    <p>{props.description}</p>
                    <Link to={props.url} rel="noopener noreferrer" target="_blank">
                        Read more
                    </Link>
                </div>
            ))}
        </div>
    )
};

export default Crypto;

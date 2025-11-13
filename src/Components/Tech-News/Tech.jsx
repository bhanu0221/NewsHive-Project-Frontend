import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../Tech-News/Tech.css';
function Tech() {

    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function loadTechNews() {
        const API_key = 'pub_fb9b18851685468284d9b9d0f7a13f8c'; // please dont use my api key
        const url = `https://newsdata.io/api/1/latest?apikey=${API_key}&category=technology&language=en`;

        try {
            setLoading(true);
            setError('');
            const response = await fetch(url);
            const data = await response.json();

            if (!data.results || data.results.length === 0) {
                setArticle([]);
            } else {
                setArticle(data.results);
            }

        } catch (error) {
            setError("Failed to load news", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        loadTechNews();
        const interval = setInterval(loadTechNews, 50000); // refresh every 50s
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="tech-container" id="tech-news">
            <h1>Latest Tech News</h1>

            {loading && <p className="loading">Please wait, loading news...</p>}
            {error && <p className="error">{error}</p>}
            
            {!loading && !error && article.length === 0 && (
                <p className="loading">No news found at the moment.</p>
            )}

            <div className="tech-list">
                {!loading &&
                    !error &&
                    article.map((item, index) => (
                        <div key={index} className="tech-card">
                            <h2>{item.title}</h2>

                            <p>
                                <strong>Source:</strong> {item.source_id || "Unknown"}
                            </p>

                            {item.image_url && (
                                <img
                                    src={item.image_url}
                                    alt={item.title || "News"}
                                    className="tech-news-image"
                                />
                            )}

                            <p>{item.description || "No description available."}</p>

                            {item.link && (
                                <Link to={item.link} target="_blank" rel="noopener noreferrer">
                                    Read more
                                </Link>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Tech;

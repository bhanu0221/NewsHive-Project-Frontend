import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../Crime-News/Crime.css';

function Crime() {
    

    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function loadCrimeNews() {
        const apiKey = "pub_fb9b18851685468284d9b9d0f7a13f8c"; // please dont use my api key
        const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=crime&country=in&language=en`;

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
        loadCrimeNews();
        const interval = setInterval(loadCrimeNews, 50000); // refresh every 50s
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="main-crime">
            <h1>Crime Cases in India</h1>

            {loading && <p className="loading">Please wait, loading news...</p>}
            {error && <p className="error">{error}</p>}
            
            {!loading && !error && article.length === 0 && (
                <p className="loading">No news found at the moment.</p>
            )}

            <div className="crime-list">
                {!loading &&
                    !error &&
                    article.map((props, index) => (

                        <div key={index} className="crime-card">
                            <h2>{props.title}</h2>

                            <p>
                                <strong>Source:</strong> {props.source_id || "Unknown"}
                            </p>

                            {props.image_url && (
                                <img
                                    src={props.image_url}
                                    alt={props.title || "News"}
                                    className="crime-news-image"
                                />
                            )}

                            <p>{props.description || "No description available."}</p>

                            {props.link && (
                                <Link to={props.link} target="_blank" rel="noopener noreferrer">
                                    Read more
                                </Link>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Crime

import React from 'react'
import '../Feed-Back/Feed.css';
function Feed() {
    return (
        <div className="frame">
            <h2>Need your Feedback!</h2>

            <iframe
                title="Feedback form — Daily NewsHive"
                src="https://docs.google.com/forms/d/e/1FAIpQLScrgCI7flAU8EH65PPvvprZo1W_ke8Q0h45nIORhL-3naEsVA/viewform?usp=dialog"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
    )
}

export default Feed;

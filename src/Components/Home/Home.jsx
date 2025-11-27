import { useNavigate } from 'react-router-dom';
import '../Home/Home.css';
import crypto from '../../assets/Images/crypto.webp';
import social from '../../assets/Images/current.jpg';
import tech from '../../assets/Images/tech.webp';
import football from '../../assets/Images/football.webp';
import crime from '../../assets/Images/crime.jpg';
import game from '../../assets/Images/gaming.webp';

function Home() {
    const navigate = useNavigate(); {/* instead of using Link tag I used useNavigate */ }

    const buttonHandler1 = () => {
        console.log('Navigating to /Crypto...');
        navigate('/crypto');
    }

    const buttonHandler2 = () => {
        console.log("Navigating to /Social...");
        navigate('/social');
    }

    const buttonHandler3 = () => {
        console.log("navigating to /Tech...");
        navigate('/tech');
    }

    const buttonHandler4 = () => {
        console.log("navigating to /Football...");
        navigate('/football');
    }

    const buttonHandler5 = () => {
        console.log("navigating to /Crime...");
        navigate('/crime');
    }

    const buttonHandler6 = () => {
        console.log("navigating to /Games...");
        navigate('/gaming');
    }

    return (
        <div className='Home'>
            <h1>Welcome to Daily NewsHive!</h1>
            <p className="para">Stay updated with the latest news and events happening around the world.</p>
            <div className='set-box'>
                <div className="first-container">
                    <div className="left-box">
                        <img src={crypto} alt="Crypto Prices and news" className="box-image" onClick={buttonHandler1}/>
                        <h2>Current-crypto-News</h2>
                        <button className="click" onClick={buttonHandler1}>Click</button>
                    </div>

                    <div className="center-box">
                        <img src={social} alt="Social media" className="box-image" onClick={buttonHandler2}/>
                        <h2>Social-media-News</h2>
                        <button className="click" onClick={buttonHandler2}>Click</button>
                    </div>

                    <div className="right-box">
                        <img src={tech} alt="Latest News" className="box-image" onClick={buttonHandler3}/>
                        <h2>Tech-related-News</h2>
                        <button className="click" onClick={buttonHandler3}>Click</button>
                    </div>
                </div>


                <div className="second-container">
                    <div className="left-box">
                        <img src={football} alt="Football news" className="box-image" onClick={buttonHandler4} />
                        <h2>Sport-related-News</h2>
                        <button className="click" onClick={buttonHandler4}>Click</button>
                    </div>

                    <div className="center-box">
                        <img src={crime} alt="crime related-news" className="box-image" onClick={buttonHandler5}/>
                        <h2>Crime-related-News</h2>
                        <button className="click" onClick={buttonHandler5}>Click</button>
                    </div>

                    <div className="right-box">
                        <img src={game} alt="Gaming News" className="box-image" onClick={buttonHandler6}/>
                        <h2>Gaming-related-News</h2>
                        <button className="click" onClick={buttonHandler6}>Click</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

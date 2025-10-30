import '../About/About.CSS'
import Anup from '../../assets/Images/Anup.jpg';
function About() {
    return (
        <div className="about">
            <h1>Welcome to - Daily NewsHive!</h1>
            <div className="about-text">
                <p>Welcome to our daily NewsHive! My site is a daily news platform providing fresh, real-time updates to the users and gives different types of related news.</p>
                <p>"My mission is to deliver diverse, reliable,and up-to-the-minute news to keep you informed every day."</p>

                <p>What I have used for this project</p>
                <p>I use public APIs to fetch verified and real-time news. The technology that I used is : React.js and  Node.js
                    Backend proxy to resolve cors or blocking APIs problem  show it's a modern web project.
                </p>
            </div>

            <div className="personal">
                <h2>About me</h2>
                <div id='left-Box'>
                    <img src={Anup} alt="Anup Shahi" />

                    <h3>I'm Anup shahi</h3>

                    <p>A student and Web Developer aspirant and I oversee the entire project development.</p>
                </div>
                <div id='right-box'>
                    <ul>
                        <li>Making a better structure and design of the web pages</li>
                        <li>making web site attractive and well design for users.</li>
                        <li>manages different APIs to Fetch data from the server-side to clint-side.</li>
                        <li>manages different types of issues and bugges</li>
                        <li>Delivering a seamless user interface using HTML, CSS, and JavaScript</li>
                    </ul>
                </div>
            </div>
            <p>This ensures that all aspects of the project work together efficiently, providing a user-friendly and secure
                platform.
            </p>
        </div>
    )
}

export default About;

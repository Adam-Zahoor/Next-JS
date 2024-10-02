import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Portfolio() {
    return (    
        <div className="portfolio-container">
            <div>
                <Header/>
            </div>
            <br />

            <div>
            <p className="aboutMeHeading"><b>About Me:</b></p>
            <p className="aboutMe">My name is Adam Mnhas and I am 21 years old. After completing my O'levels in 2021, I had a   dream of becoming a Full-Stack Web Developer. Fate became merciful to me when it was announced that there is an IT    Initiative being held at the Governor House of Sindh. Luckily, the prerequisites that were needed for that were the    courses which I had already did from YouTube. Alhamdulillah, performed good at the first quarter and got 90% at the    first quiz test. Currently we are learning NextJS. By the end of this Initiative, by the Will of God Almighty, we all  students will become GenAI developers.</p>
            <br />

            <p className="educationHeading"><b>Education:</b></p>
            <p className="education">I completed my O'levels in the year 2021. Currently doing Intermediate from Government  National College, Karachi</p>
            <br />

            <p className="skillsHeading"><b>Skills:</b></p>
            <p className="skills">I know how to write HTML, CSS and JavaScript. Along with TypeScript, which I gained experience of from the Governor Sindh IT Initiative. Here is my <u><a href="https://github.com/Adam-Zahoor">Github Profile</a></u>. Do check the skills that I got from the IT Initiative.</p>
            <br />

            <p className="experienceHeading"><b>Experience:</b></p>
            <p className="experience">I have experience in writing the code with HTML, CSS, JavaScript and TypeScript. </p>
            </div>
            <br />

            <div>
                <Footer/>
            </div>
        </div>
    )
}
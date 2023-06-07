import pic from '../../images/profilePic.jpg';
import Contact from './Contact';
import './AboutMe.css';

function AboutMe() {
    return(
    <div id='about-me'>
      <div id='portrait-links'>
        <div id='portrait'>
          <img src={pic} alt="Headshot of Vivian Che" />
        </div>
        <hr />
        <Contact />
      </div>
      <div id='introduction'>
        {/* <h1>About Me! &#128105;&#127995;&#8205;&#128187;</h1> */}
        <div id='bio'>
          <p>
            <span className='hello-world'>Hello world,</span> I'm Vivian Che! Currently, I work as a Frontend Developer at Albertsons contracted through Nisum Technologies.
           I have over one year of experience working on UI features in the Home and Nav team!  My earliest introduction
           to coding was in middle school, spending hours on end making my very own tamagotchi pet
           through a program called Scratch. I distinctly remembered the accomplishment making something
           come to life and awe at the technologies that allowed me to do this.
           {/* I enjoy the creativeness aspect and challenges that comes */}
           {/* with building intuitive applications. */}
          </p>
          <p>
            Years later,
           this sentiment is still at the forefront of my mind, as I pursue software engineering.
           However this time, with my background in the healthcare and mental health space,
           I spend hours building apps that solve real world problems and improving mental health
           (checkout a project dear to my heart, Reflect).
           As of currently, I look forward to growing as a software developer by
           continuing to learn useful programming languages and tools.
          </p>
          <p>
            When I'm not building apps, I'm documenting everything my dog does, spending time with family and friends, and cooking delicious Vietnamese food.
            Thank you for visiting my portfolio!
          </p>

        </div>
      </div>
    </div>
    )
}

export default AboutMe;

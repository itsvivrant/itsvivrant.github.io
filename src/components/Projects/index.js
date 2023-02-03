import reflectMock from '../../images/reflectmock.png'
import touristrMock from '../../images/touristrmock.png';
import petMock from '../../images/petclinicmock.png';

import './Projects.css';

function Projects() {
    return(
        <div id='portfolio'>
            <h3 className="portfolio-title">Projects</h3>
            <div id='portfolio-container'>
                <div className='overview'>
                    <img src={reflectMock} alt='mockup of Reflect'/>
                    <div className='description'>
                        <h3 className='title'>Reflect</h3>
                        <p>A journaling app within the mental health space inspired by positive psychology research, the Science of Wellbeing,
                            by Laurie Santos. The
                        </p>
                        <div>
                            <a href="https://reflect-in.herokuapp.com/"><button className="bttn-slide slide_left" >Live</button></a>
                            <a href="https://github.com/itsvivrant/Reflect"><button className="bttn-slide slide_left">Github</button></a>
                        </div>
                    </div>
                </div>
                <div className='overview'>
                    <img src={touristrMock} alt='mockup of Touristr'/>
                    <div className='description'>
                        <h3 className='title'>Touristr</h3>
                        <p>A location photo sharing app inspired by Flickr. With Touristr, users can view photos uploaded
                             across the app as well as upload their own photo, edit the photo. Users are able to comment
                             on photos and create their own albums.
                        </p>
                        <div>
                            <a href="https://touristr-lens.herokuapp.com/"><button className="bttn-slide slide_left" >Live</button></a>
                            <a href="https://github.com/itsvivrant/Touristr"><button className="bttn-slide slide_left">Github</button></a>
                        </div>
                    </div>
                </div>
                <div className='overview'>
                    <img src={petMock} alt='mockup of Petclinic'/>
                    <div className='description'>
                        <h3 className='title'>PetClinic</h3>
                        <p>With PetClinic, users and professionals can ask undying questions about their pets or animals
                            they're curious about. Answers are answered by verfied professionals only which makes PetClinic
                            an app you can trust.
                        </p>
                        <div>
                            <a href="https://petclinic-overflow.herokuapp.com/"><button className="bttn-slide slide_left" >Live</button></a>
                            <a href="https://github.com/hiepkhuu/PetClinic"><button className="bttn-slide slide_left">Github</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects

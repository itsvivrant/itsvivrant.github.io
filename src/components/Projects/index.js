import reflectMock from '../../images/reflectmock.png'
import touristrMock from '../../images/touristrmock.png';
import petMock from '../../images/petclinicmock.png';
import Tools from '../Projects/tools';
import ProjectModal from '../Modal /ProjectModal';

import './Projects.css';

function Projects() {
    return(
        <div id='portfolio'>
            <h3 className="portfolio-title">Projects</h3>
            <div id='portfolio-container'>
                <div className='overview'>
                    <img src={reflectMock} alt='mockup of Reflect'/>
                    <div className='description'>
                        <div className='project-header'>
                            <h3 className='title'>Reflect</h3>
                            <ProjectModal />
                        </div>
                        <p className='summary'>A journaling app within the mental health space inspired by positive psychology research, the Science of Wellbeing,
                            by Laurie Santos. The styling is inspired by Zoho Books. The user is able perform CRUD functionalites on journals
                            and entries through carefully designed RESTFUL APIs.
                        </p>

                        <div className="tools">
                            <p>Tools used:</p>
                            <Tools
                                tech={['Javscript', 'PostgresSQL', 'Node.js', 'ReactJS', 'Redux', 'CSS', 'Python', 'Flask', 'SQLAlchemy', 'Docker']}
                            />
                        </div>
                        <div className='links'>
                            <a href="https://reflect-in.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="bttn-slide slide_left" >Live</button></a>
                            <a href="https://github.com/itsvivrant/Reflect" target="_blank" rel="noopener noreferrer"><button className="bttn-slide slide_left">Github</button></a>
                        </div>
                    </div>
                </div>
                <div className='overview'>
                    <img src={touristrMock} alt='mockup of Touristr'/>
                    <div className='description'>
                        <div className='project-header'>
                            <h3 className='title'>Touristr</h3>
                            <ProjectModal />

                        </div>
                        <p className='summary'>A location photo sharing app inspired by Flickr. With Touristr, users can view photos uploaded
                             across the app as well as upload their own photo, edit the photo. Users are able to comment
                             on photos and create their own albums.
                        </p>
                        <div className="tools">
                            <p>Tools used:</p>
                            <Tools
                                tech={['Javascript', 'HTML', 'CSS', 'React', 'Redux', 'AJAX', 'PostgresSQL', 'Express.js', 'Sequelize.js', 'CSURF Library', 'Express Validator Library', 'AWS']}
                            />
                        </div>
                        <div className='links'>
                            <a href="https://touristr-lens.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="bttn-slide slide_left" >Live</button></a>
                            <a href="https://github.com/itsvivrant/Touristr" target="_blank" rel="noopener noreferrer"><button className="bttn-slide slide_left">Github</button></a>
                        </div>
                    </div>
                </div>
                <div className='overview'>
                    <img src={petMock} alt='mockup of Petclinic'/>
                    <div className='description'>
                        <div className='project-header'>
                            <h3 className='title'>PetClinic</h3>
                            <ProjectModal />
                        </div>
                        <p className='summary'>With PetClinic, users and professionals can ask undying questions about their pets or animals
                            they're curious about. Answers are answered by verfied professionals only which makes PetClinic
                            an app you can trust.
                        </p>
                        <div className='tools'>
                            <p>Tools used:</p>
                            <Tools
                                tech={['Javascript', 'HTML', 'CSS', 'Pug', 'AJAZ', 'Express.js', 'Express Validation', 'JQuery', 'PostgresSQL', 'CSURF']}
                            />
                        </div>
                        <div className='links'>
                            <a href="https://petclinic-overflow.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="bttn-slide slide_left" >Live</button></a>
                            <a href="https://github.com/hiepkhuu/PetClinic" target="_blank" rel="noopener noreferrer"><button className="bttn-slide slide_left">Github</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects

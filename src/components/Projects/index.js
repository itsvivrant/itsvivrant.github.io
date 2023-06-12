import reflectMock from '../../images/reflectmock.png'
import touristrMock from '../../images/touristrmock.png';
import petMock from '../../images/petclinicmock.png';
import Tools from '../Projects/tools';
import ProjectModal from '../Modal /ProjectModal';

import reflectCreate from '../../images/Reflect/Reflect-create.png';
import reflectCreateEntry from '../../images/Reflect/Reflect-createentry.png';
import reflectDeleteJournal from '../../images/Reflect/Reflect-deletejournal.png';
import reflectEdit from '../../images/Reflect/Reflect-edit.png';
import reflectEditDeleteEntry from '../../images/Reflect/Reflect-editdeleteentry.png';
import reflectHome from '../../images/Reflect/reflect-home.png';
import reflectJournals from '../../images/Reflect/Reflect-journals.png';
import reflectLogin from '../../images/Reflect/Reflect-login.png';
import reflectSignUp from '../../images/Reflect/Reflect-signup.png';

import touristrHome from '../../images/Touristr/touristr-home.png';
import touristrProfile from '../../images/Touristr/touristr-profile.png';
import touristrUpdate from '../../images/Touristr/touristr-updatephoto.png';
import touristrUpload from '../../images/Touristr/touristr-upload.png';
import touristrViewAll from '../../images/Touristr/touristr-viewall.png';
import touristrViewPhoto from '../../images/Touristr/touristr-viewphoto.png'

import petHome from '../../images/PetClinic/pet-home.png';
import petAnswer from '../../images/PetClinic/pet-answer.png';
import petAsk from '../../images/PetClinic/pet-ask.png'
import petProfile from '../../images/PetClinic/pet-profile.png';
import petData from '../../images/PetClinic/pet-data.png'

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
                            <ProjectModal
                                images={[reflectHome,reflectLogin,reflectSignUp,reflectJournals,reflectCreate,reflectDeleteJournal,reflectEdit,reflectCreateEntry,reflectEditDeleteEntry ]}
                                title="Reflect"
                                githubURL="https://github.com/itsvivrant/Reflect"
                                liveLink="https://reflect-in.herokuapp.com/"
                            />
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
                            <ProjectModal
                                images={[touristrHome, touristrViewAll, touristrViewPhoto, touristrUpdate, touristrUpload, touristrProfile]}
                                title="Touristr"
                                githubURL="https://github.com/itsvivrant/Touristr"
                                liveLink="https://touristr-lens.herokuapp.com/"
                            />

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
                            <ProjectModal
                                images={[petHome, petAnswer, petAsk, petProfile, petData]}
                                title="PetClinic"
                                githubURL="https://github.com/hiepkhuu/PetClinic"
                                liveLink="https://petclinic-overflow.herokuapp.com/"
                            />
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

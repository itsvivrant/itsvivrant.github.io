import reflectMock from '../../images/reflectmock.png'
import touristrMock from '../../images/touristrmock.png';
import petMock from '../../images/petclinicmock.png';
import sneaxMock from '../../images/sneakxmock.png'
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

import snHome from '../../images/Sneax/sn-home.png';
import snLogin from '../../images/Sneax/sn-login.png';
import snSignUp from '../../images/Sneax/sn-signup.png';
import snView from '../../images/Sneax/sn-view.png';
import snWatch from '../../images/Sneax/sn-watch.png';
import snSearch from '../../images/Sneax/sn-search.png';
import snIndividual from '../../images/Sneax/sn-individual.png';


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
                                features={[
                                    "User login and signup",
                                    "View user journals and delete journals",
                                    "Users can create a journal",
                                    "Users can edit a journal",
                                    "View journal entries and create entry",
                                    "Users can edit and delete entry"
                                ]}
                                futureGoals={[
                                    "Search functionality for users to search keywords as well as dates",
                                    "Bookmark functionality for users to save entries"
                                ]}
                                reflections="This project introduced me to powerful tools such as the useState() and the useEffect() react hook. I used useEffect to seamlessly render data in the CreateEntry component and EditEntry component without
                                page refresh.
                                I also learned useState as a tool to create interactive features and styles without writing class. Overall a very fun and challenging project that
                                helped me learn much more about the ReactJS framework and data rendering. I also enjoyed making Reflect aesthetically pleasing :)"
                            />
                        </div>
                        <p className='summary'>A journaling fullstack application created through a personal experience with positive psychology research, the Science of Wellbeing,
                            by Laurie Santos, and styling inspired by Zoho Books. Journaling has been scientifically proven to decrease stress by the method of reflection.
                            Feeling down lately? Join Reflect, start your journaling process, and improve your quality of life today!
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
                                features={[
                                    "User authentication is completed by hasing passwords using bcryptJS library",
                                    "Implementation of CSURF protection to prevent csrf attacks",
                                    "Users can view, upload, and edit photos",
                                    "Users can add, delete comments, and update comments",
                                    "Users can view their photos, albums, and favorites in their profile page",
                                    "Photos can be uploaded locally using AWS"
                                ]}
                                futureGoals={[
                                    "Ultilize Google API so users can map the geolocation of their photos",
                                    "Implement favorites",
                                    "Add tags"
                                ]}
                                reflections=""
                            />

                        </div>
                        <p className='summary'>A location photo sharing application inspired by Flickr. Touristr is a community of travelers
                        who document and share their
                        incredible travels with each other through images! Live vicariously through others with Touristr.
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
                                features={["Users are able to sign-in, sign-up and log-out of their accounts",
                                            "Logged in users can upvote and downvote on questions",
                                            "Only logged in users can post their answers to a question",
                                            "Logged in users can delete and update their answers and questions"
                                          ]}
                                futureGoals={[
                                    "Edit/delete answers",
                                    "Edit/delete questions",
                                    "Splash page",
                                    "Search functionality"
                                ]}
                                reflections=""

                            />
                        </div>
                        <p className='summary'>With PetClinic, users and professionals can ask undying questions about their pets or animals
                            they're curious about. Answers are answered by verfied professionals which makes PetClinic
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
                <div className='overview'>
                    <img src={sneaxMock} alt='mockup of Sneax'/>
                    <div className='description'>
                        <div className='project-header'>
                            <h3 className='title'>Sneax</h3>
                            <ProjectModal
                                images={[snHome, snLogin, snSignUp, snView, snWatch, snSearch, snIndividual]}
                                title="Sneax"
                                githubURL="https://github.com/Simonvargas/SneaX"
                                liveLink="https://sneaxs.herokuapp.com/"
                                features={["New account creation, log in, log out, and guest/demo login",
                                            "All users can browse through listed shoes brand",
                                            "Pre-filled information of sneakers and their stock price in the database",
                                            "Users can browse through categories of brands to search for a shoe",
                                            "Users can search for a shoe by either name or brand through the search-bar",
                                            "Users can choose to add a specific stock to their watchlist",
                                            "Users can remove a specified stock from their watchlist",
                                            "Users can purchase stocks for their specified sneaker",
                                            "Users can choose to update their stock percentage by purchasing more stock",
                                            "If stock is purchased, the user profile page will display the purchased stock in their assets list",
                                            "Logged in users can delete their stock"
                                          ]}
                                futureGoals={[

                                ]}
                                reflections=""

                            />
                        </div>
                        <p className='summary'>SneaX is a financial application that allows user to invest
                        in SneaX, which are sneakers. The user can purchase SneaXs and add them to their watchlist.
                        This full stack application is inspired by Robinhood.
                        </p>
                        <div className='tools'>
                            <p>Tools used:</p>
                            <Tools
                                tech={['Javascript', 'HTML', 'CSS3', 'React', 'Redux', 'Python', 'Flask', 'WTForms', 'SQLAlchemy', 'PostgresSQL']}
                            />
                        </div>
                        <div className='links'>
                            <a href="https://sneaxs.herokuapp.com" target="_blank" rel="noopener noreferrer"><button className="bttn-slide slide_left" >Live</button></a>
                            <a href="https://github.com/Simonvargas/SneaX" target="_blank" rel="noopener noreferrer"><button className="bttn-slide slide_left">Github</button></a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects

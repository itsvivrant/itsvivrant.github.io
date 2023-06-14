import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import './ProjectModal.css'

function ProjectModal({images, title, githubURL, liveLink, features, futureGoals}) {
    const [showModal, setShowModal] = useState(false);

    const viewProject = () => {
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    }

    const exitProject = () => {
        setShowModal(false);
        document.body.style.overflow = 'scroll';
    }



    return (
       <div>
        <i className="fas fa-info-circle" onClick={viewProject}></i>
        {showModal && (
            <Modal onClose={exitProject}>
                <div className='project-container'>
                    <div className='overview-header-container'>
                        <div className='overview-header'>
                            <div className='overview-title'> <h2>{title}</h2></div>
                            <div className="overview-links">
                                <button className='github'>
                                    <a href={githubURL} target='_blank' rel='noreferrer'>GitHub</a>
                                </button>
                                <button className='live-link'>
                                    <a href={liveLink} target='_blank' rel='noreferrer'>Visit Site</a>
                                </button>
                                <button className='exit-modal-btn' onClick={exitProject}>X</button>
                            </div>
                        </div>
                    </div>
                    <div className='project-gallery'>
                        {images?.map(image => {
                            return (
                                <div key={image} className='slideshow-images'>
                                    <img className='project-image'  src={image} height='440' />
                                </div>
                            )
                        })}
                    </div>
                    <div className='overview-description'>
                        <div className='description-column'>
                            <h4>User Features</h4>
                            {features?.map(feature => {
                                return (
                                    <div key={feature} className='overviewdescription-container'>
                                        <li>{feature}</li>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='description-column'>
                            {futureGoals ? <h4>Future Goals</h4> : null}
                            {futureGoals?.map(goal => {
                                return (
                                    <div key={goal} className='overviewdescription-container'>
                                        <li>{goal}</li>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </Modal>
        )}
       </div>
    )
}

export default ProjectModal;

import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

import './ProjectModal.css'

function ProjectModal() {
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
        <i class="fas fa-info-circle" onClick={viewProject}></i>
        {showModal && (
            <Modal onClose={exitProject}>
                <div>Testing</div>
            </Modal>
        )}
       </div>
    )
}

export default ProjectModal;

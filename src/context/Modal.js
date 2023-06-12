import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {motion} from 'framer-motion';
import './Modal.css';

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
      <>
      <motion.div
        initial = {{
          opacity: 0
        }}
        animate = {{
          opacity: 1,
          transition: {
            duration: 0.3
          }
        }}
        id="modal"
        onClick={onClose}>

      </motion.div>
      <motion.div
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.3
          }
        }}
        id="modal-background">
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.3,
            }
          }}
          id="modal-content">
          {children}
        </motion.div>

      </motion.div>


    </>,
    modalNode

  );
}

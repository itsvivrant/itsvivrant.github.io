import React from 'react';
import Fade from '@mui/material/Fade';
import Tooltip from '@mui/material/Tooltip';
import { styled } from "@mui/material/styles";


function Contact() {
  const ToBeStyledTooltip = ({ className, ...props }) => (
    <Tooltip {...props} classes={{ tooltip: className }} />
  );
  const StyledTooltip = styled(ToBeStyledTooltip)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 13,
      arrow: {
        color: theme.palette.common.black,
      }
  }));

  return (
    <>
      <div id='contact-links'>
        <a href='https://www.linkedin.com/in/vivian-ngoc-che/' target='_blank' rel='noreferrer'>
          <StyledTooltip
            title='LinkedIn'>
            <i className='fab fa-linkedin'></i>
          </StyledTooltip>
        </a>
        <a href='https://github.com/itsvivrant' target='_blank' rel='noreferrer'>
          <StyledTooltip
            title='Github'>
            <i className='fab fa-github'></i>
          </StyledTooltip>
        </a>
        <a href='https://angel.co/u/vivian-ngoc-che' target='_blank' rel='noreferrer'>
          <StyledTooltip
            title='AngelList'>
            <i className='fab fa-angellist'></i>
          </StyledTooltip>
        </a>
        <a href='mailto:baongocche@gmail.com'>
          <StyledTooltip
            title='Email'>
            <i className='fas fa-envelope'></i>
          </StyledTooltip>
        </a>
      </div>
    </>
  )
}

export default Contact;

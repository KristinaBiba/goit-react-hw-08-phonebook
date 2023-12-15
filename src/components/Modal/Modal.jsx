import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import { Backdrop, Box, Modal, Fade, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const modalRoot = document.getElementById('modal-root');

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderColor: 'primary',
};

export function ModalWindow({ toggleModal, isModalOpen, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

  const handleEsc = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  const handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  const handleClose = e => {
    toggleModal();
  };

  return createPortal(
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isModalOpen}
      onClose={handleBackdrop}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isModalOpen}>
        <Box sx={style}>
          <IconButton sx={{ left: '90%' }}  onClick={handleClose} aria-label="add an alarm">
            <CloseIcon />
          </IconButton>
          {children}
        </Box>
      </Fade>
    </Modal>,
    modalRoot
  );
}

Modal.propTypes = {
  toggleModal: PropTypes.func,
  src: PropTypes.string,
};

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css'
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

    render() {
        return createPortal(
            <div className={css.Overlay} onClick={this.handleBackdropClick}>
                <div className={css.Modal} >
                    <img src={this.props.currentImage} alt="" width="800" />
                </div>
      </div>,
      modalRoot
    );
    }
    static propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string,
    currentImageDescription: PropTypes.string,
  };
}

export default Modal;

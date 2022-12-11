import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Modal from './Modal/Modal'
import Loader from './Loader/Loader'
import Searchbar from './Searchbar/Searchbar'
import { Button } from './Button/Button'
import { Api } from './helpers/API';
import { ImageGallery } from './ImageGallery/ImageGallery';


class App extends Component {
  state = {
    showModal: false,
    search: '',
    images: [],
    page: 1,
    loading: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onFormSubmit = search => {
    this.setState({
      search,
      images: [],
      page: 1,
    });
  };

  
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ToastContainer position="top-center" hideProgressBar autoClose={500} />
        <ImageGallery images={this.state.images} />
        
        {/* <button type='button' onClick={this.toggleModal}>Открыть</button> 
            <ImageGallery images={this.state.images} openModal={this.openModal} />
            {this.state.showModal && <Modal onClose={this.toggleModal}> 
          
             <h1>Здесь будет модалка</h1> 
           <p>А здесь ее текст</p> 

          <button type="button" onClick={this.toggleModal}>Закрыть</button></Modal>}
    
         */}
      </div>
    )
  }
}

export default App;


             
     
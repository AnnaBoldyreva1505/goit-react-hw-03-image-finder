import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import fetchImages from './helpers/API';
import { ImageGallery } from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    isLoading: false,
    largeImageURL: 'largeImageURL',
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.getImg(search, page);
    }
  }

  getImg = async (query, page) => {
    this.setState({ isLoading: true });
    if (!query) {
      return;
    }
    try {
      const { hits, totalHits } = await fetchImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / this.state.per_page),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onFormSubmit = search => {
    this.setState({
      search,
      images: [],
      page: 1,
      currentImage: null,
    });
  };

  onNextFetch = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

   openModal = image => {
    this.setState({ currentImage: image });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };


  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onFormSubmit} />

        <ToastContainer position="top-center" hideProgressBar autoClose={500} />
        <ImageGallery images={this.state.images} openModal={this.openModal}
            closeModal={this.closeModal} />
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading &&
          this.state.images.length !== 0 &&
          this.state.images.length % 12 === 0 && (
            <Button
              text={'Load More'}
              onNextFetch={this.onNextFetch}
              page={this.state.page}
            />
          )}

    {this.state.currentImage && (
          <Modal currentImage={this.state.currentImage} closeModal={this.closeModal} />
        )}
  
      </div>
    );
  }
}

export default App;

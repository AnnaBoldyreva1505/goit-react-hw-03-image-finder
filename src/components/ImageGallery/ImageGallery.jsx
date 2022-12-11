import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';


export const ImageGallery = ({ images, openModal, closeModal }) => {

  return (
    <ul className={css.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
          largeImageURL={largeImageURL}
         openModal={openModal}
            closeModal={closeModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  id: PropTypes.number,
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func,
};

export default ImageGallery
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images,  toggleModal}) => {
  return (
    <ul>
      {images.map(one => (
        <ImageGalleryItem
          key={one.id}
          previewURL={one.previewURL}
          tags={one.tags}
          largeImageURL={one.largeImageURL}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};

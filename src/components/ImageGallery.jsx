// import { Component } from 'react';

import { ImageGalleryItem } from './ImageGalleryItem';
// import Modal from './Modal';

// class ImageGallery extends Component {
//   state = {
//     largeImageURL: '',
//   }

//   handleClick = (e) => {
//     this.setState({ largeImageURL: e.target.largeImageURL });
//     this.props.toggleModal()
//   }

//   render() {
//     const { images, toggleModal, isShowModal } = this.props;
//     return (
//       <>
//      <ul>
//      {images.map(one => (
//         <ImageGalleryItem
//           key={one.id}
//           previewURL={one.previewURL}
//           tags={one.tags}
//           largeImageURL={one.largeImageURL}
//           toggleModal={toggleModal}
//           isShowModal={isShowModal}
//           onClick={this.handleClick}
//         />
//       ))}
//     </ul>
//     {isShowModal && (<Modal toggleModal={toggleModal} largeImageURL={this.state.largeImageURL} />)}
//     </>
//     )
//   }
// }
  
//   export default ImageGallery

export const ImageGallery = ({ images, handleImgClick, toggleModal }) => {

  // const handleModalClick = (id) => {
  //   const targetEl = images.find((one) => one.id === id);
  //   console.log(targetEl.id)
  //   toggleModal()
  // }

  return (
    <ul>
      {images.map(one => (
        <ImageGalleryItem
          key={one.id}
          previewURL={one.previewURL}
          tags={one.tags}
          largeImageURL={one.largeImageURL}
          id={one.id}
          toggleModal={toggleModal}
          handleImgClick={handleImgClick}
        />
      ))}
    </ul>
  );
};



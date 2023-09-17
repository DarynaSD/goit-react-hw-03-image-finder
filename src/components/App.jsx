import { Component } from 'react';

import { findImagesByQuery } from './helper';
import Searchbar from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { LoadMoreButton } from './Button';
import Modal from './Modal';

class App extends Component {
  state = {
    page: 1,
    images: null,
    searchQuery: '',
    isLoading: false,
    error: '',
    isModalOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.searchQuery !== prevState.searchQuery
    ) {
      this.fetchPhotos(prevState);
    }
  }

  fetchPhotos = async prevState => {
    try {
      this.setState({ isLoading: true });

      const data = await findImagesByQuery(
        this.state.searchQuery,
        this.state.page
      );

      this.state.page === 1
        ? this.setState({ images: data.hits })
        : this.setState({ images: [...prevState.images, ...data.hits] });

      console.log(data);
      // console.log(prevState.images)
      // console.log(this.state.images)
    } catch (error) {
      this.setState({ isLoading: true });
      this.setState({ error: error.response.data });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearchQuery = value => {
    this.setState({ searchQuery: value, page: 1 });
  };

  HandleLoadMoreClick = () => {
    let newPage = this.state.page + 1;
    this.setState({ page: newPage });
  };

  toggleModal = () => {
		this.setState((prev) => ({ isShowModal: !prev.isShowModal }))
	}

  render() {
    const { error, isLoading, images } = this.state;
    return (
      <>
        {error && <h1>{error}</h1>}

        <Searchbar submit={this.handleSearchQuery} />

        {isLoading && <h1>Loading...</h1>}

        {images &&
          (!images.length ? (
            <h1>No data found</h1>
          ) : (
            <ImageGallery images={images} toggleModal={ this.toggleModal} />
          ))}

        {images &&
          (!images.length ? null : images.length % 12 ? (
            <h1>End of results</h1>
          ) : (
            <LoadMoreButton HandleLoadMoreClick={this.HandleLoadMoreClick} />
          ))}
        
        {this.state.isShowModal && (
					<Modal toggleModal={this.toggleModal} largeImageUrl/>
				)} 
      </>
    );
  }
}

export default App;

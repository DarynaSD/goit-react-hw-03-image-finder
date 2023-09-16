import { Component } from 'react';

import { findImagesByQuery } from './helper';
import Searchbar from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { LoadMoreButton } from './Button';

class App extends Component {
  state = {
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: '',
    images: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.searchQuery !== prevState.searchQuery
    ) {
      this.fetchPhotos(prevState);
    }
  }

  fetchPhotos = async (prevState) => {
    try {
      this.state.searchQuery === prevState.searchQuery
        ? this.setState({
            isLoading: true,
            images: prevState.images,
          })
        : this.setState({
          isLoading: true,
          images: null,
          });

      console.log(prevState)
      console.log(this.state)
      
      
      const data = await findImagesByQuery(
        this.state.searchQuery,
        this.state.page
      );
      this.setState({ images: data.hits });
    } catch (error) {
      this.setState({ error: error.response.data });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearchQuery = value => {
    this.setState({ searchQuery: value });
  };

  HandleLoadMoreClick = () => {
    console.log(this.state);
    let newPage = this.state.page + 1;
    this.setState({ page: newPage });
  }

  render() {
    const { error, isLoading, images } = this.state;
    return (
      <>
        {error && <h1>{error}</h1>}
        <Searchbar submit={this.handleSearchQuery} />
        {isLoading && <h1>Loading...</h1>}
        {images && (!images.length ? <h1>No data found</h1> : <ImageGallery images={images} />)}
        <LoadMoreButton HandleLoadMoreClick={ this.HandleLoadMoreClick} />
      </>
    );
  }
}

export default App;

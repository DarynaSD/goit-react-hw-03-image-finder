import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyEsc);
  }

  handleKeyEsc = e => {
    if (e.code === 'Escape') this.props.toggleModal();
    console.log('Esc');
  };

  render() {
    const { toggleModal, largeImageURL } = this.props;
    return (
      <div className="overlay" onClick={toggleModal} style={{width: 400}}>
        <div className="modal">
          <img src={largeImageURL} alt="" style={{width: 400}}/>
        </div>
      </div>
    );
  }
}

export default Modal;

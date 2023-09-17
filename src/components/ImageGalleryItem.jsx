export const ImageGalleryItem = ({previewURL, tags, toggleModal, largeImageURL}) => {
    return (
<li>
        <img src={previewURL} alt={tags} onClick={() => toggleModal(largeImageURL)} />
</li>
	)
}
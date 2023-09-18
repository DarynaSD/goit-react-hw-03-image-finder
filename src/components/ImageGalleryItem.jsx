export const ImageGalleryItem = ({ previewURL, tags, id, handleImgClick, toggleModal }) => {
    //console.log(id)
    return (
<li>
            <img src={previewURL} alt={tags} id={id} onClick={() => handleImgClick(id)} />
</li>
	)                        
}
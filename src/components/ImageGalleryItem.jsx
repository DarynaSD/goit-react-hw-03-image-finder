export const ImageGalleryItem = ({previewURL, tags}) => {
    return (
<li>
  <img src={previewURL} alt={tags} />
</li>
	)
}
import { ImageGalleryItem } from "./ImageGalleryItem";

export const ImageGallery = ({images}) => {
    return (
        <ul> 
            {images.map((one) => (
                <ImageGalleryItem key={one.id} previewURL={one.previewURL} tags={one.tags } />
))}
        </ul>
    )
}
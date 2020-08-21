import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';


function ProductImage(props) {
    const [Images, setImages] = useState([])

    useEffect(() => {
        if (props.detail.images && props.detail.images.length > 0) {
            let images = [];
            props.detail.images && props.detail.images.map(item => {
                images.push({
                    original: `https://glamstudio.com.ar/uploads/${item}`,
                    thumbnail: `https://glamstudio.com.ar/uploads/${item}`
                })
                return images
            })
            setImages(images)
        }
    }, [props.detail])

    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default ProductImage

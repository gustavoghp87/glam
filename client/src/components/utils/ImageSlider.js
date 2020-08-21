import React from 'react';
import { Carousel } from 'antd';


function ImageSlider(props) {

    return (
        <div>
            <Carousel autoplay>
                {props.images.map( (image, index) => (
                    <div key={index}>
                        <img style={{width:'auto', maxHeight:'150px', margin:'auto'}}
                            src={`https://glamstudio.com.ar/uploads/${image}`} alt="productImage" /> 
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider

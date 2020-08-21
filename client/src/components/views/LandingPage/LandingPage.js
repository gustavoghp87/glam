import React from 'react';
import { Carousel } from 'react-bootstrap';


function LandingPage() {

    let presentation = {marginRight:'15%', marginLeft:'15%', marginTop:'1%', marginBottom:'15%'};
    var carrusel = {};
    try {
        //console.log("ANCHO", window.screen.width)
        if (window.screen.width<=767) {
          presentation = {marginRight:'10px', marginLeft:'10px', marginTop:'1%', marginBottom:'15%'};
          carrusel = {maxWidth:'90%'}
        }
    } catch(e) {}

    
    return (

        <div style={presentation} id="presentation">

            <h2 style={{textAlign:'center'}}> All right! </h2>

            <Carousel>
                <Carousel.Item style={carrusel}>
                    <img className="d-block w-100" src="/imgs/glamprimera.jpeg" alt="First slide" style={{width:'100%'}} />
                    {/* <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item style={carrusel}>
                    <img className="d-block w-100" src="/imgs/pic1.jpeg" alt="Second slide" style={{width:'100%'}} />
                    {/* <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item style={carrusel}>
                    <img className="d-block w-100" src="/imgs/pic2.jpeg" alt="Third slide" style={{width:'100%'}} />
                    {/* <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item style={carrusel}>
                    <img className="d-block w-100" src="/imgs/pic3.jpeg" alt="Forth slide" style={{width:'100%'}} />
                    {/* <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>

            <br/><br/><br/><br/>
        </div>
    );
}


export default LandingPage

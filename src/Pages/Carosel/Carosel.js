import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from '../../image/carosel/1.jpg'
import image2 from '../../image/carosel/2.jpg';
import image3 from '../../image/carosel/3.jpg'
const Carosel = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className='d-none d-lg-block'>Build Your Career</h5>
                        <p className='d-none d-lg-block'>A solid career plan is important in that it can provide a roadmap for your future</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5 className='d-none d-lg-block'>Develop Your Skills</h5>
                        <p className='d-none d-lg-block'>Having a good skill set also helps you grow as an individual. You build a network, learn time management and gain interpersonal skills.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5 className='d-none d-lg-block'>Build Your Knowledge</h5>
                        <p className='d-none d-lg-block'>
                            Knowledge is understanding gained through learning or experience. You read a recipe to gain knowledge about baking rhubarb pie
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carosel;
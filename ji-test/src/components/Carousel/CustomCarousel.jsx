
import Carousel from 'react-bootstrap/Carousel';
import CustomButton from '../Button/CustomButton';
import Next from "../../assets/icons/arrow-right.svg?react";
import Prev from "../../assets/icons/arrow-left.svg?react";
import imageSrc from '@/assets/slider/slider-image-1.jpg';

const CustomCarousel = () => {
    return (
        <Carousel
            className='carousel'
            indicators={false}
            nextIcon={<span className="custom-next"><Next /></span>}
            prevIcon={<span className="custom-prev"><Prev /></span>}
        >
            <Carousel.Item>
                <img
                    className="d-block"
                    src={imageSrc}
                    alt="Первый слайд"
                    width={600}
                    height={600}
                />
                <Carousel.Caption className='p-0'>
                    <CustomButton />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={imageSrc}
                    alt="Второй слайд"
                    width={600}
                    height={600}
                />
                <Carousel.Caption>
                    <CustomButton />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={imageSrc}
                    alt="Третий слайд"
                    width={600}
                    height={600}
                />
                <Carousel.Caption>
                    <CustomButton />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CustomCarousel;
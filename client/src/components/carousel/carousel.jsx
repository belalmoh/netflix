import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import Vod from "../vod/vod";
import "./carousel.scss";

// List.jsx in the tutorial
const Carousel = () => {

    const [slideNumber, setslideNumber] = useState(0);
    const carouselRef = useRef();

    const handleClick = (direction) => {
        return async () => {
            let distance = carouselRef.current.getBoundingClientRect().x - 50;
            if(direction === 'left' && slideNumber > 0) {
                setslideNumber(slideNumber -1);
                carouselRef.current.style.transform = `translateX(${230 + distance}px)`;
            } else if(direction === 'right' && slideNumber < 5) {
                setslideNumber(slideNumber +1);
                carouselRef.current.style.transform = `translateX(${-230 + distance}px)`;
            }
        }
    }
    
    return (
        <div className="carousel">
            <span className="carouselTitle">Continue Watching</span>
            <div className="wrapper">
                {slideNumber > 0 && <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={handleClick("left")}
                />}
                <div className="container" ref={carouselRef}>
                    {Array(10).fill(0).map((v, k) => (<Vod index={k}/>))}
                </div>
                {slideNumber < 5 && <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={handleClick("right")}
                />}
            </div>
        </div>
    );
};

export default Carousel;

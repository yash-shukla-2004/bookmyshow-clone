import { NextArrow, PrevArrow } from "../components/hero carousel/herocarousel.component.arrows";

const settings = {
    infinite: true,
    slidesToScroll: 2,
    slidesToShow: 5,
    autoplay: false,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll:2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToScroll:2,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
}

export default settings;
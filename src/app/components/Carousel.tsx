"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banner from "./Banner";

const banners = [
    {
        tag: "Exclusive Tournament",
        title: "Piggy Christmas Tap:",
        subTitle: "€35,000 For Your Wins",
        btnText: "JOIN AND WIN",
        imgSrc: "/assets/carousel1.png",
        description: "",
        backGroudColor: "linear-gradient(64.92deg, #147261 27.03%, #082C25 78.3%)",
    },
    {
        tag: "CashBack",
        title: "Win or Get Back up",
        subTitle: "to €100",
        btnText: "Discover More",
        imgSrc: "/assets/carousel2.png",
        description: "See your best cashback offers for Slots, Live Games, and Crash Games. Play and get your money back daily!",
        backGroudColor: "linear-gradient(64.92deg, #0E2966 27.03%, #081B36 78.3%)",
    },
    {
        tag: "CashBack",
        title: "Win or Get Back up",
        subTitle: "to €100",
        btnText: "Discover More",
        imgSrc: "/assets/carousel2.png",
        description: "See your best cashback offers for Slots, Live Games, and Crash Games. Play and get your money back daily!",
        backGroudColor: "linear-gradient(64.92deg, #0E2966 27.03%, #081B36 78.3%)",
    },
];

const Carousel = () => {

    return (
        <div className="carousel">
            <Swiper
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={100}
                pagination={{ clickable: true }}
                initialSlide={0}
                effect={'coverflow'}
                slidesPerView={1.5}
                coverflowEffect={{
                    rotate: 1,
                    stretch: 10,
                    depth: 20,
                    modifier: 1,
                    slideShadows: false,
                }}

                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="lg:w-full h-full"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <Banner banner={banner} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Carousel;
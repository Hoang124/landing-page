'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SeeAll from "public/assets/see-all.svg";
import Card from "./Card";

const cardItems = [
    {
        title: "100HP Gaming",
        imgSrc: "/assets/game1.svg",
        tag: "HOT",
    },
    {
        title: "VeliPlay",
        imgSrc: "/assets/game2.svg",
        tag: "HOT",
    },
    {
        title: "Evolution",
        imgSrc: "/assets/game3.svg",
        tag: "NEW",
    },
    {
        title: "Onlyplay",
        imgSrc: "/assets/game4.svg",
        tag: "NEW",
    },
    {
        title: "Onlyplay",
        imgSrc: "/assets/game5.svg",
        tag: "",
    },
    {
        title: "Onlyplay",
        imgSrc: "/assets/game6.svg",
        tag: "",
    },
    {
        title: "Onlyplay",
        imgSrc: "/assets/game7.svg",
        tag: "",
    },
    {
        title: "Onlyplay",
        imgSrc: "/assets/game8.svg",
        tag: "HOT",
    },
    {
        title: "Onlyplay",
        imgSrc: "/assets/game10.svg",
        tag: "",
    },
    {
        title: "Onlyplay",
        imgSrc: "/assets/game10.svg",
        tag: "HOT",
    },
    {
        title: "Onlyplay",
        imgSrc: "/assets/game10.svg",
        tag: "HOT",
    },
    {
        title: "Onlyplay",
        imgSrc: "/assets/game10.svg",
        tag: "HOT",
    },
    {
        title: "Onlyplay",
        imgSrc: "/assets/game10.svg",
        tag: "HOT",
    },
    {
        title: "Onlyplay",
        imgSrc: "/assets/game10.svg",
        tag: "HOT",
    },
    {
        title: "Onlyplay",
        imgSrc: "/assets/game10.svg",
        tag: "HOT",
    },
];

const ExclusiveCard = () => {
    return (
        <div className="exclusive-card">
            <div className="exclusive-card__header">
                <h3 className="exclusive-card__title">Exclusive Games</h3>
                <div className="flex gap-2 items-center">
                    <span>SEE ALL</span>
                    <SeeAll />
                </div>
            </div>
            <div className="card-container">
                <Swiper
                    grabCursor={true}
                    spaceBetween={8}
                    breakpoints={{
                        0: { slidesPerView: 3 },
                        1024: { slidesPerView: 8.5 }
                    }}
                    initialSlide={0}
                    className="w-full"
                >
                    {cardItems.map((game, index) => (
                        <SwiperSlide key={index}>
                            <Card game={game} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    );
}

export default ExclusiveCard;
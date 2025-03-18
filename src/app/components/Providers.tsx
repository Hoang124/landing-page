'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SeeAll from "public/assets/see-all.svg";

const providerItems = [
    {
        name: "Evolution",
        imgSrc: "/assets/provider1.svg",
        numberOfGame: 312,
    },
    {
        name: "Spribe",
        imgSrc: "/assets/provider2.svg",
        numberOfGame: 12,
    },
    {
        name: "VeliPlay",
        imgSrc: "/assets/provider3.svg",
        numberOfGame: 9,
    },
    {
        name: "Turbo Games",
        imgSrc: "/assets/provider4.svg",
        numberOfGame: 36,
    },
    {
        name: "SmartSoft",
        imgSrc: "/assets/provider5.svg",
        numberOfGame: 37,
    },
    {
        name: "100HP Gaming",
        imgSrc: "/assets/provider6.svg",
        numberOfGame: 7,
    },
    {
        name: "BGaming",
        imgSrc: "/assets/provider7.svg",
        numberOfGame: 166,
    },
    {
        name: "Wazdan",
        imgSrc: "/assets/provider8.svg",
        numberOfGame: 199,
    },
    {
        name: "Wazdan",
        imgSrc: "/assets/provider8.svg",
        numberOfGame: 199,
    },
    {
        name: "Wazdan",
        imgSrc: "/assets/provider8.svg",
        numberOfGame: 199,
    },
    {
        name: "Wazdan",
        imgSrc: "/assets/provider8.svg",
        numberOfGame: 199,
    },
]

const Providers = () => {
    return (
        <div className="providers">
            <div className="providers__header">
                <h3 className="providers__title">All Providers</h3>
                <div className="flex gap-2 items-center">
                    <span>SEE ALL</span>
                    <SeeAll />
                </div>
            </div>
            <div className="providers-container">
                <Swiper
                    grabCursor={true}
                    // centeredSlides={true}
                    spaceBetween={8}
                    slidesPerView={8}
                    initialSlide={0}
                    // loop={true}
                    className="w-full h-full"
                >
                    {providerItems.map((provider, index) => (
                        <SwiperSlide key={index}>
                            <div className="provider__item">
                                <div className="provider__img-container">
                                    <div className="provider__img">
                                        <Image src={provider.imgSrc} fill alt={provider.name} />
                                    </div>
                                </div>
                                <div className="provider__info">
                                    <p className="provider__name">{provider.name}</p>
                                    <p className="provider__number-of-game">{provider.numberOfGame} Games</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Providers;
'use client';

import { useState, useEffect } from "react";

const Menu = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const menuItems = width > 1024 ? [
        {
            title: "Diamond",
            icon: "/assets/diamond.svg",
        },
        {
            title: "VIP",
            icon: "/assets/vip.svg",
        },
        {
            title: "Promotion",
            icon: "/assets/promotion.svg",
        },
        {
            title: "Hot Match",
            icon: "/assets/hotmatch.svg",
        },
        {
            title: "P2P Transaction",
            icon: "/assets/transaction.svg",
        },
        {
            title: "Games",
            icon: "/assets/games.svg",
        },
        {
            title: "Providers",
            icon: "/assets/providers.svg",
        },
    ] : [
        {
            title: "Search",
            icon: "/assets/search.svg",
        },
        {
            title: "Games",
            icon: "/assets/games.svg",
        },
        {
            title: "Providers",
            icon: "/assets/providers.svg",
        },
    ]
    return (
        <div className="menu-container">
            {
                menuItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <img src={item.icon} alt="icon" />
                        <span>{item.title}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Menu;
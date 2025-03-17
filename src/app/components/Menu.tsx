'use client';

import { useState, useEffect } from "react";
// import Image from "next/image";
import Diamond from "public/assets/diamond.svg";
import Vip from "public/assets/vip.svg";
import Promotion from "public/assets/promotion.svg";
import HotMatch from "public/assets/hotmatch.svg";
import Transaction from "public/assets/transaction.svg";
import Games from "public/assets/games.svg";
import Providers from "public/assets/providers.svg";
import Search from "public/assets/search.svg";


const Menu = () => {
    const [width, setWidth] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const menuItems = width > 1024 ? [
        {
            title: "Diamond",
            icon: <Diamond />,
        },
        {
            title: "VIP",
            icon: <Vip />,
        },
        {
            title: "Promotion",
            icon: <Promotion />,
        },
        {
            title: "Hot Match",
            icon: <HotMatch />,
        },
        {
            title: "P2P Transaction",
            icon: <Transaction />,
        },
        {
            title: "Games",
            icon: <Games />,
        },
        {
            title: "Providers",
            icon: <Providers />,
        },
    ] : [
        {
            title: "Search",
            icon: <Search />,
        },
        {
            title: "Games",
            icon: <Games />,
        },
        {
            title: "Providers",
            icon: <Providers />,
        },
    ]
    return (
        <div className="menu-container">
            {
                menuItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        {item.icon}
                        <span>{item.title}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Menu;
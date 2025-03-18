'use client';

import Link from "next/link";
import Telegram from "public/assets/telegram.svg";
import Facebook from "public/assets/facebook.svg";
import Instagram from "public/assets/instagram.svg";
import Twitter from "public/assets/twitter.svg";
import Apple from "public/assets/apple.svg";
import Android from "public/assets/android.svg";
import Drop from "public/assets/drop.svg";
import { useState } from "react";


const Footer = () => {
    const [showGames, setShowGames] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showLegal, setShowLegal] = useState(false);

    return (
        <footer className="footer">
            <div className="footer__container hidden lg:grid">
                <div>
                    <h3>Help Center</h3>
                    <p>If you have any questions?</p>
                    <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium py-2 px-6 rounded-md mb-6">
                        GET ANSWERS
                    </button>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <Telegram />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <Facebook />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <Instagram />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <Twitter />
                        </Link>
                    </div>
                </div>

                <div>
                    <h4>Games</h4>
                    <ul>
                        <li><Link href="#">Game 1</Link></li>
                        <li><Link href="#">Game 2</Link></li>
                        <li><Link href="#">Game 3</Link></li>
                        <li><Link href="#">Game 14</Link></li>
                    </ul>
                </div>

                <div>
                    <h4>About</h4>
                    <ul>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Promotions</Link></li>
                        <li><Link href="#">VIP</Link></li>
                        <li><Link href="#">Help Center</Link></li>
                        <li><Link href="#">Awards & Certificates</Link></li>
                        <li><Link href="#">App</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Legal Information</h4>
                    <ul>
                        <li><Link href="#">General Terms & Conditions</Link></li>
                        <li><Link href="#">Responsible Gaming Policy</Link></li>
                        <li><Link href="#">Sports Betting Rules</Link></li>
                        <li><Link href="#">Privacy and Cookies Policy</Link></li>
                        <li><Link href="#">Payment Methods</Link></li>
                        <li><Link href="#">Limits</Link></li>
                    </ul>
                </div>

                <div className="relative">
                    <div className="footer__app-container">
                        <div className="footer__app">
                            <Apple />
                            <Link href="#" className="footer__app-text">
                                Bluechip App For Mac OS
                            </Link>
                        </div>
                        <div className="flex space-x-4">
                            <div className="footer__app footer__app-half">
                                <Android />
                                <Link href="#" className="footer__app-text">
                                    Android
                                </Link>
                            </div>
                            <div className="footer__app footer__app-half">
                                <Apple />
                                <Link href="#" className="footer__app-text">
                                    iOS
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* smart phone */}
            {/* <div className="container mx-auto px-4 md:px-6 lg:px-8"> */}
            <div className="footer__container lg:hidden">
                {/* Mobile View */}
                <div className="md:hidden space-y-4">
                    {/* Games Accordion */}
                    <div className="footer-drop-down">
                        <button className="footer-drop__btn" onClick={() => setShowGames(!showGames)}>
                            <span className="text-lg font-semibold">Games</span>
                            <Drop />
                        </button>
                        {showGames && (
                            <ul className="text-sm text-gray-400 mt-2 space-y-2">
                                <li><Link href="#">Game 1</Link></li>
                                <li><Link href="#">Game 2</Link></li>
                                <li><Link href="#">Game 3</Link></li>
                                <li><Link href="#">Game 14</Link></li>
                            </ul>
                        )}
                    </div>

                    {/* About Accordion */}
                    <div className="footer-drop-down">
                        <button className="footer-drop__btn" onClick={() => setShowAbout(!showAbout)}>
                            <span className="text-lg font-semibold">About</span>
                            <Drop />
                        </button>
                        {showAbout && (
                            <ul className="text-sm text-gray-400 mt-2 space-y-2">
                                <li><Link href="#" className="hover:text-white">About Us</Link></li>
                                <li><Link href="#" className="hover:text-white">Promotions</Link></li>
                                <li><Link href="#" className="hover:text-white">VIP</Link></li>
                                <li><Link href="#" className="hover:text-white">Help Center</Link></li>
                                <li><Link href="#" className="hover:text-white">Awards & Certificates</Link></li>
                                <li><Link href="#" className="hover:text-white">App</Link></li>
                            </ul>
                        )}
                    </div>

                    {/* Legal Information Accordion */}
                    <div className="footer-drop-down">
                        <button className="footer-drop__btn" onClick={() => setShowLegal(!showLegal)}>
                            <span className="text-lg font-semibold">Legal Information</span>
                            <Drop />
                        </button>
                        {showLegal && (
                            <ul className="text-sm text-gray-400 mt-2 space-y-2">
                                <li><Link href="#">About Us</Link></li>
                                <li><Link href="#">Promotions</Link></li>
                                <li><Link href="#">VIP</Link></li>
                                <li><Link href="#">Help Center</Link></li>
                                <li><Link href="#">Awards & Certificates</Link></li>
                                <li><Link href="#">App</Link></li>
                            </ul>
                        )}
                    </div>

                    {/* Follow Us */}
                    <div className="py-4 text-center">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex justify-center space-x-8">
                            <Link href="#">
                                <Telegram />
                            </Link>
                            <Link href="#">
                                <Facebook />
                            </Link>
                            <Link href="#">
                                <Instagram />
                            </Link>
                            <Link href="#">
                                <Twitter />
                            </Link>
                        </div>
                    </div>

                    {/* Help Center */}
                    <div className="footer-icon-btn">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-center md:text-left">Help Center</h3>
                            <p className="text-sm text-gray-400 mb-4 text-center md:text-left">If you have any questions?</p>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium py-2 px-6 rounded-md w-full">
                                GET ANSWERS
                            </button>
                        </div>
                    </div>

                    <div className="flex w-full space-x-4">
                        {/* Bluechip App */}
                        <div className="footer-icon-btn">
                            <Android />
                            <div>
                                <h3 className="text-lg font-semibold text-center md:text-left">Bluechip App</h3>
                                <p className="text-sm text-gray-400 text-center md:text-left">for Android</p>
                            </div>
                        </div>

                        <div className="footer-icon-btn">
                            <Apple />
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-center md:text-left">Bluechip App</h3>
                                <p className="text-sm text-gray-400 mb-2 text-center md:text-left">for iOS</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
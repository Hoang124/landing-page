'use client';
import Menu from 'public/assets/menu.svg';
import Logo from 'public/assets/logo.svg';
import Search from 'public/assets/search.svg';

const items = [
    { name: 'HOME', href: '/' },
    { name: 'GAME', href: '/game' },
    { name: 'INFOR', href: '/infor' },
    { name: 'NEWS', href: '/news' },
    { name: 'PROMOTIONS', href: '/promotions' },
    { name: 'VIP', href: '/vip' }
]

const Header = () => {
    return (
        <header className="header">
            <div className='header-content'>
                <div className="header-nav">
                    <div className='flex items-center gap-1.5'>
                        <Menu />
                        <Logo />
                    </div>
                    <div className='items-center justify-between gap-8 hidden lg:flex'>
                        <Search />
                        <ul className='flex justify-between gap-4'>
                            {items.map((item, index) => (
                                <li className='nav-link' key={index}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex gap-2 pr-4'>
                    <button className='btn-login btn-text'>LOGIN</button>
                    <button className='btn-register btn-text'>REGISTRATION</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
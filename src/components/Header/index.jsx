import React from 'react';


export default class Header extends React.Component {
    render() {
        return (
            <header className="h-15 flex justify-between items-center px-14 fixed bg-white w-full shadow-lg shadow-gray-400/30 z-50">
                <div className="text-2xl">
                    <a href="/">QUIC-PRO</a>
                </div>
                <nav className="text-sm uppercase font-medium text-gray-500">
                    <a className="px-6" href="#About">About Us</a>
                    <a className="px-6" href="#Projects">Projects</a>
                    <a className="px-6" href="#Team">Team</a>
                    <a className="px-6" href="#Contact">Contact Us</a>
                </nav>
            </header>
        );
    }
}

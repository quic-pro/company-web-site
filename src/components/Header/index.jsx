import React from 'react';


export default class Header extends React.Component {
    render() {
        return (
            <header className="h-14 flex justify-between items-center mx-14">
                <div className="text-2xl">
                    <a href="/">QUIC-PRO</a>
                </div>
                <nav className="text-sm font-bold uppercase text-gray-500">
                    <a className="px-6" href="#About">About Us</a>
                    <a className="px-6" href="#Projects">Projects</a>
                    <a className="px-6" href="#Team">Team</a>
                    <a className="px-6" href="#Contact">Contact Us</a>
                </nav>
            </header>
        );
    }
}

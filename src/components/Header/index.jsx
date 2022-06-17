import React from 'react';


export default class Header extends React.Component {
    render() {
        return (
            <header className="flex justify-between">
                <div className="">
                    <a href="/">QUIC-PRO</a>
                </div>
                <nav>
                    <a className="px-4" href="#About">About Us</a>
                    <a className="px-4" href="#Projects">Projects</a>
                    <a className="px-4" href="#Team">Team</a>
                    <a className="px-4" href="#Contact">Contact Us</a>
                </nav>
            </header>
        );
    }
}

import React from 'react';


export default class Header extends React.Component {
    render() {
        return (
            <header className="h-16">
                <a href="/">QUIC-PRO</a>
                <a className="px-4" href="#About">About Us</a>
                <a className="px-4" href="#Projects">Projects</a>
                <a className="px-4" href="#Team">Team</a>
                <a className="px-4" href="#Contact">Contact Us</a>
            </header>
        );
    }
}

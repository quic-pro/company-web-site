import React from 'react';

import backgroundImg from './background.jpg';

export default class About extends React.Component {
    render() {
        return (
            <section id="About" className="px-2 clean-block clean-info dark" style={{background: '#f6f6f6'}}>
                <div className="container mx-auto sm:px-4 py-16">
                    <div className="block-heading">
                        <h2 className="text-textBlue text-3xl font-medium text-center py-9">About Us</h2>
                    </div>
                    <div className="flex flex-wrap items-center px-4">
                        <div className="md:w-1/2 px-4">
                            <img src={backgroundImg}
                                 className="max-w-full h-auto border-solid border-2 border-gray-200 rounded p-1"
                                 alt="about_us"/>
                        </div>
                        <div className="md:w-1/2 pr-4 pl-4">
                            <div className="getting-started-info">
                                <p>IT - startup, dealing with the projects in blockchain, telecommunications,
                                    cryptography and at the intersections of these fields.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

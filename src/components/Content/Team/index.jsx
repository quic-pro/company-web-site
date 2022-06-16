import React from 'react';

import photo1 from './image5.jpg';


export default class Team extends React.Component {
    render() {
        const team = [
            {
                photo: photo1,
                name: 'Egor Zudin',
                position: 'СЕО, blockchain entrepreneur ',
                contacts: [
                    {
                        icon: 'icon-social-facebook',
                        url: 'https://www.facebook.com/egzudin/'
                    },
                    {
                        icon: 'icon-social-linkedin',
                        url: 'https://www.linkedin.com/in/egor-zuidn/'
                    },
                    {
                        icon: 'icon-social-github',
                        url: 'https://github.com/verificatorrus'
                    }
                ]
            },
            {
                photo: photo1,
                name: 'Aleksandr Rakhlenko',
                position: 'Project - manager, planning and monitoring of the objectives specialist',
                contacts: [
                    {
                        icon: 'icon-social-facebook',
                        url: 'https://www.facebook.com/aleksandr.rakhlenko/'
                    },
                    {
                        icon: 'icon-social-linkedin',
                        url: 'https://www.linkedin.com/in/aleksandr-rakhlenko-1b3479233/'
                    }
                ]
            }
        ];

        return (
            <section id="Team" className="px-2 clean-block about-us">
                <div className="container mx-auto sm:px-4">
                    <div className="block-heading">
                        <h2 className="text-textBlue text-3xl font-medium text-center pt-9">Team</h2>
                        <p className="text-center py-7">The team of professionals in their fields&nbsp;<br/></p>
                    </div>
                    <div className="flex flex-wrap  justify-center">
                        {team.map((item, index) => {
                            return (
                                <div className="sm:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4" key={index}>
                                    <div
                                        className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 text-center clean-card">
                                        <img className="w-full rounded rounded-t w-full block" alt="team2"
                                             src={item.photo}/>
                                        <div className="flex-auto p-6 info">
                                            <h4 className="mb-3">{item.name}</h4>
                                            <p className="mb-0">{item.position}<br/></p>
                                            <div className="icons">
                                                {
                                                    item.contacts.map((item2, index2) => {
                                                        return (
                                                            <a href={item2.url} key={index2}>
                                                                <i Name={item2.icon}/>
                                                            </a>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

import React from 'react';

import Employee from './Employee';


export default class Team extends React.Component {
    team = [
        {
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

    render() {
        return (
            <section id="Team" className="px-2 clean-block about-us">
                <div className="container mx-auto sm:px-4">
                    <div className="block-heading">
                        <h2 className="text-textBlue text-3xl font-medium text-center pt-9">Team</h2>
                        <p className="text-center py-7">The team of professionals in their fields&nbsp;<br/></p>
                    </div>
                    <div className="flex flex-wrap  justify-center">
                        {this.team.map((employee, index) => <Employee employee={employee} key={index}/>)}
                    </div>
                </div>
            </section>
        );
    }
}

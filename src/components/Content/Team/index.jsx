import React from 'react';
import {FiFacebook, FiLinkedin, FiGithub} from 'react-icons/fi'

import Employee from './Employee';


export default class Team extends React.Component {
    team = [
        {
            name: 'Egor Zudin',
            position: 'СЕО, blockchain entrepreneur ',
            contacts: [
                {
                    icon: FiFacebook,
                    url: 'https://www.facebook.com/egzudin/'
                },
                {
                    icon: FiLinkedin,
                    url: 'https://www.linkedin.com/in/egor-zuidn/'
                },
                {
                    icon: FiGithub,
                    url: 'https://github.com/verificatorrus'
                }
            ]
        },
        {
            name: 'Aleksandr Rakhlenko',
            position: 'Project - manager, planning and monitoring of the objectives specialist',
            contacts: [
                {
                    icon: FiFacebook,
                    url: 'https://www.facebook.com/aleksandr.rakhlenko/'
                },
                {
                    icon: FiLinkedin,
                    url: 'https://www.linkedin.com/in/aleksandr-rakhlenko-1b3479233/'
                }
            ]
        }
    ];

    render() {
        return (
            <section id="Team">
                <div className="container py-20">
                    <div className="mb-8">
                        <p className="text-3xl font-medium text-companyBlue-600 text-center">Team</p>
                        <p className="text-center mt-4 text-gray-400">The team of professionals in their fields</p>
                    </div>
                    <div className="flex flex-wrap  justify-center">
                        {this.team.map((employee, index) => <Employee employee={employee} key={index}/>)}
                    </div>
                </div>
            </section>
        );
    }
}

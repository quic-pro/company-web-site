import React from 'react';

import Project from './Project';

import {AiOutlineStar} from 'react-icons/ai';
import {BsPencil} from 'react-icons/bs';
import {GiSmartphone} from 'react-icons/gi';
import {FiRefreshCcw} from 'react-icons/fi';


export default class Projects extends React.Component {
    projects = [
        {
            icon: <AiOutlineStar className="fill-companyBlue box-border h-10 w-10 pr-4"/>,
            direction: 'Cryptography',
            description: 'Development of technical solutions in the field of cryptography'
        },
        {
            icon: <BsPencil className="fill-companyBlue box-border h-10 w-10 pr-4"/>,
            direction: 'Transmission security',
            description: 'Establishment of the defended and channels of communication'
        },
        {
            icon: <GiSmartphone className="fill-companyBlue box-border h-10 w-10 pr-4"/>,
            direction: 'Blockchain',
            description: 'Implementation of projects related to blockchain and NFT'
        },
        {
            icon: <FiRefreshCcw className="stroke-companyBlue box-border h-10 w-10 pr-4"/>,
            direction: 'Metaverses',
            description: 'Combining real world and meta-verses through digital technological introduction'
        }
    ];

    render() {
        return (
            <section id="Projects" className="px-2 clean-block features">
                <div className="container py-20">
                    <div className="mb-8">
                        <p className="text-3xl font-medium text-companyBlue-600 text-center">Projects</p>
                    </div>
                    <div className="flex flex-wrap  justify-center">
                        {
                            this.projects.map((project, index) => <Project project={project} key={index}/>)
                        }
                    </div>
                </div>
            </section>
        );
    }
}

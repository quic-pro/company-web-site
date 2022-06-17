import React from 'react';

import Project from './Project';

import { AiOutlineStar } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { GiSmartphone } from 'react-icons/gi';
import { FiRefreshCcw } from 'react-icons/fi';


export default class Projects extends React.Component {
    projects = [
        {
            icon: <AiOutlineStar/>,
            direction: 'Cryptography',
            description: 'Development of technical solutions in the field of cryptography'
        },
        {
            icon: <BsPencil/>,
            direction: 'Transmission security',
            description: 'Establishment of the defended and channels of communication'
        },
        {
            icon: <GiSmartphone/>,
            direction: 'Blockchain',
            description: 'Implementation of projects related to blockchain and NFT'
        },
        {
            icon: <FiRefreshCcw/>,
            direction: 'Metaverses',
            description: 'Combining real world and meta-verses through digital technological introduction'
        }
    ];

    render() {
        return (
            <section id="Projects" className="px-2 clean-block features">
                <div className="container mx-auto sm:px-4 py-2">
                    <div className="block-heading">
                        <h2 className="text-textBlue text-3xl font-medium text-center py-9">Projects</h2>
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

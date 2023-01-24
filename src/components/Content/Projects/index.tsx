import {AiOutlineStar} from 'react-icons/ai';
import {BsPencil} from 'react-icons/bs';
import {FiRefreshCcw} from 'react-icons/fi';
import {GiSmartphone} from 'react-icons/gi';

import ProjectBlock, {ProjectData} from './ProjectBlock';


export default function ProjectList() {
    const projects: ProjectData[] = [
        {
            icon: AiOutlineStar,
            direction: 'Cryptography',
            description: 'Development of technical solutions in the field of cryptography',
        },
        {
            icon: BsPencil,
            direction: 'Transmission security',
            description: 'Establishment of the defended and channels of communication',
        },
        {
            icon: GiSmartphone,
            direction: 'Blockchain',
            description: 'Implementation of projects related to blockchain and NFT',
        },
        {
            icon: FiRefreshCcw,
            direction: 'Metaverses',
            description: 'Combining real world and meta-verses through digital technological introduction',
        },
    ];

    return (
        <section id="Projects" className="px-2 clean-block features">
            <div className="container py-20">
                <div className="mb-8">
                    <p className="text-3xl font-medium text-companyBlue-600 text-center">Projects</p>
                </div>
                <div className="flex flex-wrap justify-center">
                    {projects.map((projectData, index) => <ProjectBlock projectData={projectData} key={index}/>)}
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import PropType from 'prop-types'
import {IconType} from 'react-icons';

type Props={
  projectData:ProjectData;
}

export type ProjectData = {
  icon: IconType;
  direction:string;
  description:string;
};

export default function ProjectBlock({projectData}:Props){
        return (
            <div className="flex flex-row md:w-2/5 px-4 pt-5 feature-box">
                <div>
                    <projectData.icon className="text-companyBlue box-border h-10 w-10 pr-4"/>
                </div>
                <div className="grow">
                    <h4 className="font-bold text-xl py-2">{projectData.direction}</h4>
                    <p className="text-sm text-botBottomBlack">{projectData.description}<br/></p>
                </div>
            </div>
        );
    }


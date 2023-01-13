import React from 'react';
import {IconType} from 'react-icons';


type Props = {
    contactData: ContactData;
}

export type ContactData = {
    icon: IconType;
    url: string;
};


export default function Contact({contactData}: Props) {
    return (
        <a className="m-2" href={contactData.url}>
            <contactData.icon className="text-companyBlue text-lg"/>
        </a>
    );
}

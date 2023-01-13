import React from 'react';
import Contact, {ContactData} from './Contact';


type Props = {
    employeeData: EmployeeData;
}

export type EmployeeData = {
    name: string;
    position: string;
    contacts: ContactData[];
};


export default function Employee({employeeData}: Props) {
    return (
        <div className="sm:w-1/2 px-4 lg:w-1/3 pt-2">
            <div className="rounded border border-1 border-gray-300 text-center shadow-lg shadow-gray-400/30">
                <img className="w-full rounded rounded-t w-full block" alt={employeeData.name}
                     src={'img/employees/' + employeeData.name + '.jpeg'}/>
                <div className="flex-auto p-6 info h-40 items-center justify-center mb-2 ">
                    <h4 className="mb-3 font-semibold">{employeeData.name}</h4>
                    <p className="mb-0">{employeeData.position}<br/></p>
                    <div className="flex justify-center">
                        {employeeData.contacts.map((contactData, index) => <Contact contactData={contactData}
                                                                                    key={index}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}


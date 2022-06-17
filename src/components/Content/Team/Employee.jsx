import React from 'react';
import PropType from 'prop-types'

import Contact from './Contact';


export default class Employee extends React.Component {
    static propTypes = {
        employee: PropType.shape({
            name: PropType.string.isRequired,
            position: PropType.string.isRequired,
            contacts: PropType.arrayOf(PropType.shape({
                icon: PropType.string.isRequired,
                url: PropType.string.isRequired
            }).isRequired)
        }).isRequired
    };

    render() {
        const {employee} = this.props;

        return (
            <div className="sm:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4">
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 text-center clean-card">
                    <img className="w-full rounded rounded-t w-full block" alt={employee.name} src={'img/employees/' + employee.name + '.jpeg'}/>
                    <div className="flex-auto p-6 info">
                        <h4 className="mb-3">{employee.name}</h4>
                        <p className="mb-0">{employee.position}<br/></p>
                        <div className="icons">
                            {
                                employee.contacts.map((contact, index) => <Contact contact={contact} key={index}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

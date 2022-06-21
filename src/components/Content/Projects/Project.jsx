import React from 'react';
import PropType from 'prop-types'


export default class Project extends React.Component {
    static propTypes = {
        project: PropType.shape({
            icon: PropType.func.isRequired,
            direction: PropType.string.isRequired,
            description: PropType.string.isRequired
        }).isRequired
    };

    render() {
        const {project} = this.props;

        return (
            <div className="flex flex-row md:w-2/5 px-4 pt-5 feature-box">
                <div>
                    <project.icon className="text-companyBlue box-border h-10 w-10 pr-4"/>
                </div>
                <div className="grow">
                    <h4 className="font-bold text-xl py-2">{project.direction}</h4>
                    <p className="text-sm text-botBottomBlack">{project.description}<br/></p>
                </div>
            </div>
        );
    }
}

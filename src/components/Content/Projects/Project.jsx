import React from 'react';
import PropType from 'prop-types'


export default class Project extends React.Component {
    static propTypes = {
        project: PropType.shape({
            icon: PropType.object.isRequired,
            direction: PropType.string.isRequired,
            description: PropType.string.isRequired
        }).isRequired
    };

    render() {
        const {project} = this.props;

        return (
            <div className="md:w-2/5 pr-4 pl-4 feature-box">
                <i className="icon-star icon"/>
                <h4 className="font-bold text-xl py-2 pt-5">{project.direction}</h4>
                <p className="text-sm">{project.description}<br/></p>
            </div>
        );
    }
}

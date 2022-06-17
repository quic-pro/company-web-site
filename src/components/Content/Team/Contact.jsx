import React from 'react';
import PropType from 'prop-types'


export default class Contact extends React.Component {
    static propTypes = {
        contact: PropType.shape({
            icon: PropType.string.isRequired,
            url: PropType.string.isRequired
        }).isRequired
    };

    render() {
        const {contact} = this.props;

        return (
            <a href={contact.url}>
                <i className={contact.icon}/>
            </a>
        );
    }
}

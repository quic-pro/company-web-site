import React from 'react';

import Preview from './Preview';
import About from './About';
import Projects from './Projects';
import Team from './Team';
import Contact from './Contact';


export default class Content extends React.Component {
    render() {
        return (
            <main>
                <Preview/>
                <About/>
                <Projects/>
                <Team/>
                <Contact/>
            </main>
        );
    }
}

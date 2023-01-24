import React from 'react';

import About from './About';
import Contact from './Contact';
import Preview from './Preview';
import ProjectList from './Projects';
import Team from './Team';


export default function Content() {
    return (
        <main>
            <Preview/>
            <About/>
            <ProjectList/>
            <Team/>
            <Contact/>
        </main>
    );
}

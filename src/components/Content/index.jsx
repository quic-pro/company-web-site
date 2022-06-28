import React from 'react';

import Preview from './Preview';
import About from './About';
import ProjectList from './Projects';
import Team from './Team';
import Contact from './Contact';

import BannerCookie from './BannerCookie';


export default class Content extends React.Component {
    render() {
        return (
            <main>
                <Preview/>
                <About/>
                <BannerCookie/>
                <ProjectList/>
                <Team/>
                <Contact/>
            </main>
        );
    }
}

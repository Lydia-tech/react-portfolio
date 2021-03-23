import React from 'react';
import Nav from "../components/Nav";
import About from '../components/About'
import ProjectContainer from '../components/ProjectContainer';

export default function Homepage() {
    return (
        <div>
            <Nav></Nav>
            Home 

            <About />
            <ProjectContainer />
            {/* Footer */}
        </div>
    )
}

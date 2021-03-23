import React from 'react'
import Project from '../components/Project'

const projects =[
    {
        title: 'Project 1', description: 'project1 description'
    },
    {
        title: 'Project 2', description: 'project2 description'
    },
    {
        title: 'Project 3', description: 'project2 description'
    },
    {
        title: 'Project 4', description: 'project2 description'
    },
]

function ProjectContainer() {
    return (
        <div>
            <h2>Portfolio</h2>
            {projects.map((project, index) => (
                <Project key={index} project={project}/>
            ))}
        </div>
    )
}

export default ProjectContainer

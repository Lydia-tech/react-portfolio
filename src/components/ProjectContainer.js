import React from 'react'
import Project from '../components/Project'

const projects =[
    {
        title: 'Budget Tracker', description: 'Keep track of your budget while on the go!'
    },
    {
        title: 'Hike Now', description: 'Find a trail and the weather when you are out of town!'
    },
    {
        title: 'SLP Goalden', description: 'Track your students progress with this application.'
    },
    {
        title: 'Work Day Scheduler', description: 'Keep track of your tasks with this easy to use application.'
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

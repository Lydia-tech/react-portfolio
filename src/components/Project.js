import React from 'react'

function Project({project}) {

    
    return (
        <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <br />
        </div>
    )
}

export default Project;

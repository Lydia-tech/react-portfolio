import React from 'react'

function Project({project}) {
   
    return (
        <div>
            <a target="_blank" href={"http://" + project.url}><h3>{project.title}</h3></a>
            <p>{project.description}</p>
            <img src={process.env.PUBLIC_URL + '/' + project.img} style={{height: 350}}></img>
            <br />
        </div>
    )
}

export default Project;

import React, { useState } from 'react';
import Link from 'next/link';

const getProjects = () => {
    return [
        {
            id: 'mentormatch',
            title: 'MentorMatch',
            technologies: ['GraphQL', 'React', 'Node', 'Bookshelf', 'Knex', 'PostgreSQL']
        },
        {id: 'scrapetheprez', title: 'ScrapeThePrez', technologies: ['Python', 'Firebase']},
        {id: 'tricone', title: 'Tricone', technologies: ['Arduino BLE', 'Vue.js']},
        {id: 'garbadoor', title: 'GarbaDoor', technologies: ['Python', 'React', 'Arduino', 'Firebase']},
        {id: 'cantrip', title: 'CanTrip', technologies: ['Java', 'Firebase', 'MySQL']},
        {id: 'test6', title: 'Fable', technologies: ['Swift', 'Kotlin', 'React']}
    ];
};

const ProjectLink = ({project}) => {
    const [isShowing, showTags] = useState(false);

    return (
        <div className="project-container">
            <Link href="/project/[id]" as={`/project/${project.id}`}>
                <div className="project-pic"
                     onMouseEnter={() => showTags(true)}
                     onMouseLeave={() => showTags(false)}>
                    { isShowing &&
                        (<div className="caption-container">
                            {project.technologies.map((technology) =>
                                <div className="project-caption">
                                    <p>{technology}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </Link>
            <div className="project-info">
                <div className="project-name">
                    <a>{project.title}</a>
                </div>
            </div>
        </div>
    );
}

const Projects = (props) => {
    return (
        <div className="container">
            <div className="container-header">
                <div className="container-title">Projects</div>
            </div>
            <div className="projects">
                {getProjects().map(project => (
                    <ProjectLink key={project.id} project={project}/>
                ))}
            </div>
        </div>
    );
}

export default Projects;
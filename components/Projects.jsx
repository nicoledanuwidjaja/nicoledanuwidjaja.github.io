import React, {Component} from 'react';
import Link from 'next/link';

const getProjects = () => {
    return [
        {
            id: 'mentormatch',
            title: 'MentorMatch',
            technologies: ['GraphQL', 'React', 'Node', 'Bookshelf', 'Knex', 'PostgreSQL']
        },
        {id: 'scrapetheprez', title: 'ScrapeThePrez', technologies: ['Python', 'Firebase']},
        {id: 'tricone', title: 'Tricone', technologies: ['Arduino BLE']},
        {id: 'garbadoor', title: 'GarbaDoor', technologies: ['Python', 'React', 'Arduino', 'Firebase']},
        {id: 'cantrip', title: 'CanTrip', technologies: ['Java', 'Firebase']},
        {id: 'test6', title: 'Project 6', technologies: ['React']}
    ];
};

const ProjectLink = ({project}) => (
    <div className="project-container">
        <Link href="/project/[id]" as={`/project/${project.id}`}>
            <div className="project-pic"/>
        </Link>
        <div className="project-info">
            <div className="project-name">
                <a>{project.title}</a>
            </div>
            <div className="caption-container">
                {project.technologies.map((technology) =>
                    <div className="project-caption">
                        <p>{technology}</p>
                    </div>
                )}
            </div>
        </div>
    </div>
);

class Projects extends Component {
    render() {
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
}

export default Projects;
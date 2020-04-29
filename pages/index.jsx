import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import {Element, Events, animateScroll as scroll, scroller} from 'react-scroll';

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

const getJobs = () => {
    return [
        {title: 'Web Developer', location: 'Boston, MA', company: 'WHOOP', dates: 'January 2020 - Present'},
        {
            title: 'Research Assistant',
            location: 'Boston, MA',
            company: 'IoT Open Innovation Lab',
            dates: 'December 2018 - Present'
        },
        {
            title: 'Coding Teacher',
            location: 'Sacramento, CA',
            company: 'St. Francis High School',
            dates: 'June 2017 - July 2018'
        }
    ];
};

const getInterests = () => {
    return [
        "blockchain technology",
        "education",
        "robotics",
        "web/mobile app development",
        "chess",
        "video editing",
        "logo design",
        "writing",
        "puzzles"
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

const JobLink = ({job}) => (
    <div className="job-title">
        <li>
            <div className="col-md-8">
                <div className="job-company">
                    <h3>{job.company}</h3>
                </div>
                <div className="job-name">
                    <a>{job.title}</a>
                </div>
            </div>
            <div className="col-md-4">
                <div className="job-location">
                    <p>{job.location}</p>
                </div>
                <div className="job-dates">
                    <p>{job.dates}</p>
                </div>
            </div>
        </li>
    </div>
);

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    scrollToWithContainer() {

        let goToContainer = new Promise((resolve, reject) => {

            scroller.scrollTo('scroll-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });

        });

        goToContainer.then(() =>
            scroller.scrollTo('scroll-container-second-element', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                containerId: 'scroll-container'
            }));
    }

    static async getInitialProps() {
        const projectData = getProjects();
        const jobData = getJobs();
        const interestData = getInterests();

        return {
            projects: projectData.map(entry => entry),
            jobs: jobData.map(entry => entry),
            interests: interestData.map(entry => entry),
        };
    };

    render() {
        return (
            <>
                <div className="content">
                    <Layout>
                        <Element name="hello" className="hello container">
                            <h1>Hello there!</h1>
                            <p>I have always had my eye on business and technology, and now I can truly say that it is
                                where
                                my passions lie. I am part of the founding team working on branding, designing,
                                programming,
                                and pitching NUGig.tech: an up-and-coming platform that connects talented Northeastern
                                students for hire in technology with local companies.</p>
                            <p>My greatest concentration is in Narwhal Company: an eCommerce business I started and have
                                made over $40,000 in revenue selling technology gadgets, everyday commodities,
                                educational
                                resources, and private-label products. Through my business, I've partnered with unique
                                individuals and businesses from across the globe including China, Israel, Hong Kong, New
                                Zealand, Greece, and more. In addition, Narwhal Company also offers on-demand virtual
                                assistant services including, but not limited to, transcriptions, copywriting, and data
                                entry.</p>
                            <p>I love working on projects! What I love about my major is that the majority of my work,
                                if
                                not all of it, is completely team-oriented, which has allowed me to grow in my
                                perspectives
                                and development as an aspiring software developer and entrepreneur. Hence, since
                                attending
                                Northeastern, I have found immense interest with participating in hackathons at diverse
                                universities, and I plan to broaden my coverage.</p>
                        </Element>

                        <Element name="projects" className="container">
                            <h1>Projects</h1>
                            <div className="projects">
                                {getProjects().map(project => (
                                    <ProjectLink key={project.id} project={project}/>
                                ))}
                            </div>
                        </Element>
                        <Element name="jobs" className="container">
                            <h1>Experience</h1>
                            <div className="jobs">
                                {getJobs().map(job => (
                                    <div className="job">
                                        <JobLink key={job.id} job={job}/>
                                    </div>
                                ))}
                            </div>
                        </Element>
                        <Element name="interests" className="container">
                            <h1>Interests</h1>
                            {getInterests().map(interest => (
                                <div className="interest">
                                    <p key={interest.id}>{interest}</p>
                                </div>
                            ))}
                        </Element>
                    </Layout>
                </div>

                <style jsx global>{`
          .content {
            font-family: 'Arial';
          }

          .title {
            background-color: black;
          }

          .container {
            display: block;
            min-height: 80vh;
            border-radius: 8px;
            border: 1px solid #B2003B;
            margin: 3% 1% 3% 1%;
            padding: 2%;
            color: black;
          }

          .container li {
            list-style: none;
            margin: 5px 0;
          }

           .jobs {
            padding: 3% 0% 3%;
            min-height: 90vh;
            height: auto;
            width: 100%;
          }

          .job {
            background-color: #D0B990;
            border-radius: 10px;
            padding: 10px;
            margin: 10px;
          }

          .projects {
            min-height: 90vh;
            height: auto;
            width: 100%;
            display: grid;
            grid-template-columns: 33% 33% 33%;
            grid-template-rows: 50% 50%;
            grid-row-gap: 1%;
            justify-items: center;
          }

          .projects a {
            font-size: 30px;
          }

          .projects p {
            font-size: 12pt;
          }

          .project-name {
            padding: 2px;
          }

          .caption-container {
            margin: auto;
          }

          .project-caption {
            border-radius: 10px;
            display: inline-block;
            background-color: yellow;
            position: relative;
            padding: 2px 6px;
            margin: 10px 10px 10px;
          }

          .project-caption p {
            display: inline;
            text-align: center;
            font-size: 14px;
          }

          .project-container {
            text-align: center;
            font-size: 16pt;
            border-radius: 10px;
            background-color: #eb6a0c;
            padding: 3%;
            margin: auto;
            width: 80%;
            height: auto;
            min-width: 250px;
            transition: all 500ms ease;
          }

          .project-container:hover {
            background-color: #B2003B;
            padding-top: 2%;
            margin-top: 2%;
            transition: all 500ms ease;
          }

          .project-pic {
            text-align: center;
            background-color: white;
            margin-bottom: 10px;
            max-height: 200px;
            height: 200px;
            width: 100%;
          }

          .project-info {
            display: block;
          }

          .project-pic:hover {
            cursor: pointer;
          }

          .interest p {
            border-radius: 20px;
            width: 20%;
            padding: 1%;
            text-align: center;
            background-color: lightskyblue;
          }

          ul {
            padding: 0;
          }

          a {
            text-decoration: none;
            color: black;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
            </>
        );
    }
}

export default Index;

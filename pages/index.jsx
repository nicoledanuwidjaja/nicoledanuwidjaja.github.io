import React, {Fragment, useState} from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import useHorizontal from '@oberon-amsterdam/horizontal/hook';
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

const getInitialProps = async () => {
    const projectData = getProjects();
    const jobData = getJobs();
    const interestData = getInterests();

    return {
        projects: projectData.map(entry => entry),
        jobs: jobData.map(entry => entry),
        interests: interestData.map(entry => entry),
    };
};

const Index = () => {
    const [container, setContainer] = useState();

    useHorizontal({container: container});
    // constructor(props) {
    //     super(props);
    //     this.scrollToTop = this.scrollToTop.bind(this);
    // }
    //
    // scrollToTop() {
    //     scroll.scrollToTop();
    // }
    //
    // scrollTo() {
    //     scroller.scrollTo('scroll-to-element', {
    //         duration: 800,
    //         delay: 0,
    //         smooth: 'easeInOutQuart'
    //     })
    // }
    //
    // scrollToWithContainer() {
    //     let goToContainer = new Promise((resolve, reject) => {
    //         scroller.scrollTo('scroll-container', {
    //             duration: 800,
    //             delay: 0,
    //             smooth: 'easeInOutQuart'
    //         });
    //     });
    //
    //     goToContainer.then(() =>
    //         scroller.scrollTo('scroll-container-second-element', {
    //             duration: 800,
    //             delay: 0,
    //             smooth: 'easeInOutQuart',
    //             containerId: 'scroll-container'
    //         })
    //     );
    // }

    return (
        <Fragment>
            <Layout className="content" ref={ref => {setContainer(ref)}}>
                {/*<div className="text-container">*/}
                {/*    <Element name="hello" className="hello-container">*/}
                {/*        <div className="landing-title">Hello there!</div>*/}
                {/*        <div className="landing-paragraph">*/}
                {/*            BLAH BLAH BLAH*/}
                {/*            I have always had my eye on business and technology, and now I can truly say that it is*/}
                {/*            where my passions lie. I am part of the founding team working on branding, designing,*/}
                {/*            programming, and pitching NUGig.tech: an up-and-coming platform that connects talented Northeastern*/}
                {/*            students for hire in technology with local companies.</div>*/}
                {/*        <div className="landing-paragraph">*/}
                {/*            My greatest concentration is in Narwhal Company: an eCommerce business I started and have*/}
                {/*            made over $40,000 in revenue selling technology gadgets, everyday commodities,*/}
                {/*            educational resources, and private-label products. Through my business, I've partnered with unique*/}
                {/*            individuals and businesses from across the globe including China, Israel, Hong Kong, New*/}
                {/*            Zealand, Greece, and more. In addition, Narwhal Company also offers on-demand virtual*/}
                {/*            assistant services including, but not limited to, transcriptions, copywriting, and data*/}
                {/*            entry.</div>*/}
                {/*        <div className="landing-paragraph">*/}
                {/*            I love working on projects! What I love about my major is that the majority of my work,*/}
                {/*            if not all of it, is completely team-oriented, which has allowed me to grow in my*/}
                {/*            perspectives and development as an aspiring software developer and entrepreneur. Hence, since*/}
                {/*            attending Northeastern, I have found immense interest with participating in hackathons at diverse*/}
                {/*            universities, and I plan to broaden my coverage.</div>*/}
                {/*    </Element>*/}
                {/*    /!*<div className="hello landing-image">*!/*/}
                {/*    /!*    <img src={require('/static/christmas_nicole.jpeg')} alt="nicole picture" />*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</div>*/}
                {/*<Element name="projects" className="container">*/}
                {/*    <div className="container-title">Projects</div>*/}
                {/*    <div className="projects">*/}
                {/*        {getProjects().map(project => (*/}
                {/*            <ProjectLink key={project.id} project={project}/>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</Element>*/}
                {/*<Element name="jobs" className="container">*/}
                {/*    <div className="container-title">Experience</div>*/}
                {/*    <div className="jobs">*/}
                {/*        {getJobs().map(job => (*/}
                {/*            <div className="job">*/}
                {/*                <JobLink key={job.id} job={job}/>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</Element>*/}
                {/*<Element name="interests" className="container">*/}
                {/*    <div className="container-title">Interests</div>*/}
                {/*    {getInterests().map(interest => (*/}
                {/*        <div className="interest">*/}
                {/*            <p key={interest.id}>{interest}</p>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</Element>*/}
            </Layout>
        </Fragment>
    );
}

export default Index;

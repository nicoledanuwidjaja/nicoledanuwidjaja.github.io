import React from 'react';
import Layout from '../components/Layout';
import st_francis from '../public/st_francis.png';
import iot_lab from '../public/iot_lab.png';
import whoop from '../public/whoop.png';
import datadog from '../public/datadog.png';
import zwift from '../public/zwift.png';
import salesforce from '../public/salesforce.png';
// import {Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';

export const getJobs = () => {
    return [
        {title: 'Software Engineering Intern', location: 'San Francisco, CA', company: 'Salesforce', dates: 'June 2021 - August 2021', id: 'salesforce', image: salesforce, link: 'https://salesforce.com/'},
        {title: 'Software Engineering Intern', location: 'New York City, NY', company: 'Datadog', dates: 'January 2021 - May 2021', id: 'datadog', image: datadog, link: 'https://www.datadoghq.com/'},
        {title: 'Software Engineering Intern', location: 'Los Angeles, CA', company: 'Zwift', dates: 'July 2020 - October 2020', id: 'zwift', image: zwift, link: 'https://zwift.com/'},
        {title: 'Web Developer Co-op', location: 'Boston, MA', company: 'WHOOP', dates: 'January 2020 - June 2020', id: 'whoop', image: whoop, link: 'http://whoop.com/'},
        {
            title: 'Research Assistant',
            location: 'Boston, MA',
            company: 'IoT Open Innovation Lab',
            dates: 'December 2018 - December 2019',
            id: 'iot_lab',
            image: iot_lab,
            link: 'https://alpha.iotopeninnovation.org/',
        },
        {
            title: 'Summer Coding Teacher',
            location: 'Sacramento, CA',
            company: 'St. Francis High School',
            dates: 'June 2017 - July 2018',
            id: 'st_francis',
            image: st_francis,
            link: 'https://stfrancishs.org/',
        }
    ];
};

export const JobLink = ({job}) => (
    <div className="job">
        <div className="left-section">
            <img className="social" src={job.image} />    
        </div>
        <div className="right-section">
            <h5>
                <a href={job.link}>{job.company}</a>
            </h5>
            <h6>{job.title}</h6>
            <p>{job.location}</p>
            <p>{job.dates}</p>
        </div>
    </div>
);

export const getInterests = () => {
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

export const ProjectLink = ({project}) => (
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

class Jobs extends React.Component {
    render() {
      return(
          <Layout page="Jobs"/>
      );
    }
  }

export default Jobs;
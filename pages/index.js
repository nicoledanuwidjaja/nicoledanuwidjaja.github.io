import Layout from '../components/Layout';
import Link from 'next/link';

function getProjects() {
    return [
        {id: 'scrapetheprez', title: 'ScrapeThePrez', technologies: 'Python, Firebase'},
        {id: 'tricone', title: 'Tricone', technologies: 'Arduino BLE'},
        {id: 'garbadoor', title: 'GarbaDoor', technologies: 'Python, React, Arduino'},
        {id: 'cantrip', title: 'CanTrip', technologies: 'Java'},
        {id: 'test5', title: 'Project 5', technologies: 'React'},
        {id: 'test6', title: 'Project 6', technologies: 'React'}
    ];
}

function getJobs() {
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
}

const ProjectLink = ({project}) => (
    <div className="project-title">
        <li>
            <Link href="/project/[id]" as={`/project/${project.id}`}>
                <div className="project-pic"/>
            </Link>
            <div className="project-name">
                <a>{project.title}</a>
            </div>
            <div className="project-caption">
                <p>{project.technologies}</p>
            </div>
        </li>
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

Index.getInitialProps = async function () {
    const projectData = getProjects();
    const jobData = getJobs();
    return {
        projects: projectData.map(entry => entry.project),
        jobs: jobData.map(entry => entry.job)
    };
};

export default function Index() {
    return (
        <>
            <div className="content">
                <Layout>
                    <div className="hello container">
                        <h1>Hello there!</h1>
                        <p>I have always had my eye on business and technology, and now I can truly say that it is where
                            my passions lie. I am part of the founding team working on branding, designing, programming,
                            and pitching NUGig.tech: an up-and-coming platform that connects talented Northeastern
                            students for hire in technology with local companies.</p>
                        <p>My greatest concentration is in Narwhal Company: an eCommerce business I started and have
                            made over $40,000 in revenue selling technology gadgets, everyday commodities, educational
                            resources, and private-label products. Through my business, I've partnered with unique
                            individuals and businesses from across the globe including China, Israel, Hong Kong, New
                            Zealand, Greece, and more. In addition, Narwhal Company also offers on-demand virtual
                            assistant services including, but not limited to, transcriptions, copywriting, and data
                            entry.</p>
                        <p>I love working on projects! What I love about my major is that the majority of my work, if
                            not all of it, is completely team-oriented, which has allowed me to grow in my perspectives
                            and development as an aspiring software developer and entrepreneur. Hence, since attending
                            Northeastern, I have found immense interest with participating in hackathons at diverse
                            universities, and I plan to broaden my coverage.</p>
                    </div>

                    <div className="container">
                        <h1>Projects</h1>
                        <ul className="projects">
                            {getProjects().map(project => (
                                <div className="project">
                                    <ProjectLink key={project.id} project={project}/>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="container">
                        <h1>Experience</h1>
                        <ul className="job-template">
                            {getJobs().map(job => (
                                <div className="job">
                                    <JobLink key={job.id} job={job}/>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="container">
                        <h1>Interests</h1>
                        <p>blockchain technology, education, robotics, web/mobile app
                            development, chess, video editing, logo design, writing, and puzzles</p>
                    </div>
                </Layout>
            </div>

            <style jsx global>{`
          .content {
            font-family: 'Roboto';
          }

          .title {
            background-color: black;
          }

          .container {
            display: block;
            min-height: 90vh;
            height: auto;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid #B2003B;
            margin: 2% 1% 2% 1%;
            color: black;
          }

          .container li {
            list-style: none;
            margin: 5px 0;
          }

          .hello {
            min-height: 50vh;
            margin-bottom: 5%;
          }
          
          .job {
            background-color: orange;
            padding: 10px;
            margin: 10px;
          }

          .projects { 
            padding: 3% 0% 3%;
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
          
          .project-caption {
            display: inline-block;
            background-color: yellow;
            position: relative;
            margin: 10% 0 10% 0;
            padding: 1% 2% 1% 2%; 
          }
          
          .project-caption p {
            display: inline;
            text-align: center;
            font-size: 14px;
          }

          .project {
            border-radius: 10px;
            background-color: lightskyblue;
            padding: 3%;
            margin: 3%;
            width: 80%;
            height: 80%;
            min-width: 250px;
            transition: all 500ms ease;
          }

          .project:hover {
            background-color: hotpink;
            padding-top: 2%;
            margin-top: 2%;
            transition: all 500ms ease;
          }

          .project-title {
            text-align: center;
            font-size: 16pt;
          }

          .project-pic {
            background-color: white;
            margin: 10px 0 10px 0;
            max-height: 200px;
            height: 200px;
            width: 100%;
          }
          
          .project-pic:hover {
            cursor: pointer;
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

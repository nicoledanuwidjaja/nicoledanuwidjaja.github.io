import Layout from '../components/Layout';
import Link from 'next/link';

function getProjects() {
  return [
    { id: 'test1', title: 'ScrapeThePrez', technologies: 'Python, Firebase'},
    { id: 'test2', title: 'Tricone', technologies: 'Arduino BLE'},
    { id: 'test3', title: 'GarbaDoor', technologies: 'Python, React, Arduino'},
    { id: 'test4', title: 'CanTrip', technologies: 'Java'},
    { id: 'test5', title: 'Project 5', technologies: 'React'},
    { id: 'test6', title: 'Project 6', technologies: 'React'}
  ];
}

function getJobs() {
  return [
    { title: 'Research Assistant', company: 'IoT Open Innovation Lab', dates: 'December 2018 - Present'}
  ];
}

const PostLink = ({ project }) => (
  <div className="project-title">
    <li>
      <Link href="/project/[id]" as={`/project/${project.id}`}>
        <a>{project.title}</a>
      </Link>
      <div className="project-pic">

      </div>
      <p>{project.technologies}</p>
    </li>
  </div>
);

Index.getInitialProps = async function() {
  const data = getProjects();
  console.log(`Data fetched: ${data.length}`);
  return {
    projects: data.map(entry => entry.project)
  };
};

export default function Index() {
   return (
     <>
     <div className="content">
      <Layout>
          <div className="hello container">
            <h1>Hello there!</h1>
            <p>I have always had my eye on business and technology, and now I can truly say that it is where my passions lie. I am part of the founding team working on branding, designing, programming, and pitching NUGig.tech: an up-and-coming platform that connects talented Northeastern students for hire in technology with local companies.</p>
            <p>My greatest concentration is in Narwhal Company: an eCommerce business I started and have made over $40,000 in revenue selling technology gadgets, everyday commodities, educational resources, and private-label products. Through my business, I've partnered with unique individuals and businesses from across the globe including China, Israel, Hong Kong, New Zealand, Greece, and more. In addition, Narwhal Company also offers on-demand virtual assistant services including, but not limited to, transcriptions, copywriting, and data entry.</p>
            <p>I love working on projects! What I love about my major is that the majority of my work, if not all of it, is completely team-oriented, which has allowed me to grow in my perspectives and development as an aspiring software developer and entrepreneur. Hence, since attending Northeastern, I have found immense interest with participating in hackathons at diverse universities, and I plan to broaden my coverage.</p>
            <p>My other areas of interest include blockchain technology, education, robotics, web/mobile app development, chess, video editing, logo design, writing, and puzzles. </p>
          </div>

          <div className="container">
            <h1>Projects</h1>
              <ul className="project-template">
                {getProjects().map(project => (
                  <div className="project">
                    <PostLink key={project.id} project={project} />
                  </div>
                ))}
              </ul>
          </div>
          <div className="container">
            <h1>Experience</h1>
            <ul className="job-template">
              {getJobs().map(job => (
                <p>Blahblahblah</p>
              ))}
            </ul>
          </div>
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
            min-height: 90vh;
            height: auto;
            background-color: rgb(255, 255, 255, 0.25);
            padding: 20px;
    				border-radius: 20px;
            margin: 1%;
            color: #fff;
          }

          .container li {
            list-style: none;
            margin: 5px 0;
          }

          .hello {
            min-height: 50vh;
            margin-bottom: 5%;
          }

          .project-template {
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

          .project-template a {
            padding: 10px;
          }

          .project-template p {
            font-size: 12pt;
          }

          .project {
            border-radius: 10px;
            background-color: pink;
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
            margin-top: 10px;
            background-color: white;
            max-height: 200px;
            height: 200px;
            width: 100%;
          }

          ul {
            padding: 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </>
   );
}

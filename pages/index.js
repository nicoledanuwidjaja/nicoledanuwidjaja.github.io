import Layout from '../components/Layout';
import Link from 'next/link';

function getProjects() {
  return [
    { id: 'test1', title: 'Project 1'},
    { id: 'test2', title: 'Project 2'},
    { id: 'test3', title: 'Project 3'}
  ];
}

const PostLink = ({ project }) => (
  <div className="project">
    <li>
      <Link href="/project/[id]" as={`/project/${project.id}`}>
        <a>{project.title}</a>
      </Link>
    </li>
  </div>
);

export default function Index() {
   return (
      <Layout>
        <div className="content">
      	  <p>Is this a PORTFOLIO Website I see?</p>
          <div className="projects">
            <h2>List of Projects</h2>
            <ul>
              {getProjects().map(project => (
                <PostLink key={project.id} project={project} />
              ))}
            </ul>
          </div>
        </div>

        <style jsx global>{`
          .content {
            font-family: 'Arial';
            padding: 20px;
          }

          ul {
            padding: 0;
          }

          .projects li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }

        `}</style>
      </Layout>
   );
}

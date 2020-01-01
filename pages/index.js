import Layout from '../components/Layout';
import Link from 'next/link';

function getProjects() {
  return [
    { id: 'test1', title: 'Project 1'},
    { id: 'test2', title: 'Project 2'},
    { id: 'test3', title: 'Project 3'},
    { id: 'test4', title: 'Project 4'},
    { id: 'test5', title: 'Project 5'},
    { id: 'test6', title: 'Project 6'}
  ];
}

const PostLink = ({ project }) => (
  <div className="project-title">
    <li>
      <Link href="/project/[id]" as={`/project/${project.id}`}>
        <a>{project.title}</a>
      </Link>
    </li>
  </div>
);

export default function Index() {
   return (
     <>
     <div className="content">
      <Layout>
          <div className="container">
            <h2>Projects</h2>
              <ul className="project-template">
                {getProjects().map(project => (
                  <div className="project">
                    <PostLink key={project.id} project={project} />
                    <div className="project-pic">
                    </div>
                  </div>
                ))}

              </ul>
          </div>
          <div className="container">
            <em><h1>Testing.</h1></em>
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
            background-color: white;
            padding: 20px;
    				border-radius: 20px;
            margin: 1%;
          }

          .container li {
            list-style: none;
            margin: 5px 0;
          }

          .project-template {
            padding: 3% 0% 3%;
            min-height: 90vh;
            height: auto;
            width: 100%;
            background-color: lightgray;
            display: grid;
            grid-template-columns: 33% 33% 33%;
            grid-template-rows: 50% 50%;
            grid-row-gap: 1%;
            justify-items: center;
          }

          .project {
            border-radius: 10px;
            background-color: skyblue;
            padding: 3%;
            margin: 3%;
            width: 80%;
            height: 80%;
            min-width: 250px;
            transition: all 500ms ease;
          }

          .project:hover {
            background-color: pink;
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
            height: 80%;
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

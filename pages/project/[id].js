import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../../components/Layout';

export default function Project() {
  const router = useRouter();

  return (
    <Layout>
      <div className="container">
        <h1>{router.query.id}</h1>

        <div className="markdown">
          <Markdown
            source={`### MARKDOWN test`}/>
        </div>
      </div>

      <style jsx global>{`
        .container {
          font-family: Arial;
          height: 90vh;
          background-color: white;
          padding: 20px;
          border-radius: 20px;
          margin: 1%;
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }


      `}</style>
    </Layout>
  );
}

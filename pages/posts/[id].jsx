import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark'
import html from 'remark-html'
import Head from 'next/head';
import Date from '../../utils/date';
import Header from '../../components/Header';
import { getPostIds } from '../blog';

const postsDirectory = path.join(process.cwd(), 'posts');
const child = { width: `100vh`, height: `100%`}

const Post = ({post}) => (
  <div className="page">
    <Header style={child} />
    <div className="page-container">
      <div className="post-container">
        <Head>
          <title>{post.title}</title>
        </Head>
        <article>
          <h1 className="post-header">{post.title}</h1>
          <div className="post-subheader">
            <Date dateString={post.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      </div>
    </div>
  
  </div>
);

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}

export async function getStaticPaths() {
  const paths = getPostIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id);
  console.log(postData);
  
  return {
    props: {
      post: postData
    }
  }
}

export default Post;
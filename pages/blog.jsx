import React from 'react';
import Layout from '../components/Layout';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPosts() {
  const fileNames = fs.readdirSync(path.join('posts'));
  const posts = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data
    }
  })

  // Sort posts by date
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

class Blog extends React.Component {
  render() {
    return(
      <Layout page="Blog" posts={this.props.posts} />
    );
  }
}

export async function getStaticProps() {
  const postData = getPosts();

  return {
    props: {
      posts: postData,
    }
  };
};

export default Blog;

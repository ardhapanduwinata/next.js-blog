import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData
    }
  };
}

export default function Home({ allPostData }) {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostData.map((blog) => (
            <li className={utilStyles.listItem} key={blog.id}>
              <Link href={`/posts/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={blog.date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
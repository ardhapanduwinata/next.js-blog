import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";
import utilStyles from '../../styles/utils.module.css';

export default function Post(postData) {
    console.log(postData);
    console.log(postData.postData);
    console.log(postData.postData.title);
    return (
        <Layout>
            <Head>
                <title>{postData.postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingX1}>{postData.postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}
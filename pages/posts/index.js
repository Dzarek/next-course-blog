import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Post</title>
        <meta name="description" content="A list of all programming" />
      </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;

import { FunctionComponent } from "react";
import fetch from "isomorphic-unfetch";
import { PostList } from "../components/PostList";
import { Post } from "../types";

export type HomeProps = {
    posts: Post[];
};

const Home: FunctionComponent<HomeProps> = ({ posts }) => (
    <div>
        <PostList posts={posts} />
    </div>
);

export const getServerSideProps = async () => {
    console.log("FETCH HOMEPAGE CONTENT");
    const res = await fetch("https://nextjs-blog-cms.herokuapp.com/posts");
    const data = await res.json();
    const props: HomeProps = {
        posts: data,
    };

    return {
        props,
    };
};

export default Home;

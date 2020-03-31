import React, { FunctionComponent } from "react";
import { Post } from "../../types";

export type PostListProps = {
    posts: Post[];
};

export const PostList: FunctionComponent<PostListProps> = ({ posts }) => (
    <div>
        {posts.map(post => (
            <div>{post.title}</div>
        ))}
    </div>
);

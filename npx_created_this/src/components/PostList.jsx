import React from 'react';
import PostItem from "./PostItem";
import ButtonForPosts from "./UI/button/ButtonForPosts";
import InputForPosts from "./UI/input/InputForPosts";

const PostList = ({getPosts,title, remove}) => {

    return (
        <div>

            <h1 style={{textAlign:'center'}}>{title}</h1>
            {
                getPosts.map((post, index) =>
                <PostItem remove={remove} number={index+1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
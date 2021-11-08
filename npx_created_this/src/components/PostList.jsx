import React from 'react';
import PostItem from "./PostItem";
import ButtonForPosts from "./UI/button/ButtonForPosts";
import InputForPosts from "./UI/input/InputForPosts";

const PostList = ({getPosts,title}) => {
    return (
        <div>
            <InputForPosts type="text" placeholder="название поста"/>
            <InputForPosts  type="text" placeholder="описание поста"/>
            <ButtonForPosts>Создать пост</ButtonForPosts>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {getPosts.map((post) =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
import React, {useState} from 'react';
import InputForPosts from "./UI/input/InputForPosts";
import ButtonForPosts from "./UI/button/ButtonForPosts";

const PostForm = ({create}) => {
    const [post,setPost] = useState({
        title:'', body:''
    })

    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost={
            ...post, id:Date.now()
        }
        create(newPost)
        setPost({title:'',body:''})
    }

    return (
        <form>
            <InputForPosts value={post.title} onChange={e=>setPost({...post, title: e.target.value})} type="text" placeholder="название поста"/>
            <InputForPosts value={post.body} onChange={e=>setPost({...post, body: e.target.value})} type="text" placeholder="описание поста"/>
            <ButtonForPosts onClick={addNewPost}>Создать пост</ButtonForPosts>
        </form>
    );
};

export default PostForm;
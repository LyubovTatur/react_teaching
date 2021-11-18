import React, {useState} from 'react';
import {useRef}  from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import TextRepeater from "./components/TextRepeater";
import "../src/styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import InputForPosts from "./components/UI/input/InputForPosts";
import ButtonForPosts from "./components/UI/button/ButtonForPosts";
import PostForm from "./components/PostForm";

function App() {

    const [getPosts, setPosts] = useState([
        {id:1, title: 'Мякиш', body:'Ай рили лайк ер мякиш. МякишМякишМякиш'},
        {id:2, title: 'Дейлайт ком', body: 'Энд ми вон го хоммммм'}
    ])
    const createPost = (newPost) => {
        setPosts([...getPosts, newPost])
    }

    const removePost = (post) => {
        setPosts(getPosts.filter(p =>p.id!==post.id))
    }


  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
     <TextRepeater/>

        <PostForm create={createPost}></PostForm>
        {
            getPosts.length!==0
                ?        <PostList remove={removePost} getPosts={getPosts} title={'Вааа спесокк'}/>

                : <h1 style={{textAlign: 'center'}}> посты где то потерялись....</h1>
        }



    </div>
  );
}

export default App;

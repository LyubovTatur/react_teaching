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

function App() {

    const [getPosts, setPosts] = useState([
        {id:1, title: 'Мякиш', body:'Ай рили лайк ер мякиш. МякишМякишМякиш'},
        {id:2, title: 'Дейлайт ком', body: 'Энд ми вон го хоммммм'}
    ])

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...getPosts, newPost])
    }

  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
     <TextRepeater/>

        <form>
            <InputForPosts value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder="название поста"/>
            <InputForPosts value={body} onChange={e=>setBody(e.target.value)} type="text" placeholder="описание поста"/>
            <ButtonForPosts onClick={addNewPost}>Создать пост</ButtonForPosts>
        </form>
        <PostList getPosts={getPosts} title={'Вааа спесокк'}/>



    </div>
  );
}

export default App;

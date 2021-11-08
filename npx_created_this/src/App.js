import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import TextRepeater from "./components/TextRepeater";
import "../src/styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {

    const [getPosts, setPosts] = useState([
        {id:1, title: 'Мякиш', body:'Ай рили лайк ер мякиш. МякишМякишМякиш'},
        {id:2, title: 'Дейлайт ком', body: 'Энд ми вон го хоммммм'}
    ])

  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
     <TextRepeater/>


        <PostList getPosts={getPosts} title={'Вааа спесокк'}/>



    </div>
  );
}

export default App;

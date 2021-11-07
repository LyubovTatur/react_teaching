import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import TextRepeater from "./components/TextRepeater";


function App() {
  
  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
     <TextRepeater/>


    </div>
  );
}

export default App;

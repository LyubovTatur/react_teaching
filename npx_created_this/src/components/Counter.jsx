import React, {useState} from 'react';

const Counter = function(){
	const [getCount, setCount] = useState(0)

  	function increment(){
  	  setCount(getCount+1);
  	}
	
  	function decrement(){
  	    setCount(getCount-1);
  	  }
  

	return(

		<div>
			<h1>{getCount}</h1>

			<button onClick={increment}>Плюсик</button>
     		<button  onClick={decrement}>Минусик</button>
		</div>
	)
}
export default Counter;
import React, {useState} from 'react';

const TextRepeater = function(){
  const [getValue,setValue] = useState('я текстовое... впиши в меня');

  return(

  <h1>{getValue}</h1>
    //<input type="text" value={getValue} onChange={event=> setValue(event.target.value)}/>
  )


}

export default TextRepeater;
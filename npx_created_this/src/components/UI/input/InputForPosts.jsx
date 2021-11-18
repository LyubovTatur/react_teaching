import React from 'react';
import classes from "./InputForPosts.module.css";

const InputForPosts = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.inputForPosts} {...props}/>
            
    );
});

export default InputForPosts;
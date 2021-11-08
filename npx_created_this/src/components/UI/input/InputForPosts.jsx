import React from 'react';
import classes from "./InputForPosts.module.css";

const InputForPosts = (props) => {
    return (
        <input className={classes.inputForPosts} {...props}/>
            
    );
};

export default InputForPosts;
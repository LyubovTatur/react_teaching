import React from 'react';
import classes from './ButtonForPosts.module.css';

const ButtonForPosts = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btnForPosts}>
            {children}
        </button>
    );
};

export default ButtonForPosts;
import React from 'react';
import ButtonForPosts from "./UI/button/ButtonForPosts";

const PostItem = (props) => {
    return (
        <div className="post">

            <div className="post__content">

                <strong> {props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>




            </div>
            <div className="post__btns">

                <ButtonForPosts onClick={() => props.remove(props.post)}>Делит</ButtonForPosts>
            </div>

        </div>
    );
};

export default PostItem;
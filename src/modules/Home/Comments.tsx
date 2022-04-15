import React from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';


const { TextArea } = Input;


function Comments(children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) {

    return (
        <Comment
            actions={[<span key="comment-nested-reply-to">Reply to</span>]}
            author={<a>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure).
                </p>
            }
        >
            {children}
        </Comment>
    )
}

export default Comments
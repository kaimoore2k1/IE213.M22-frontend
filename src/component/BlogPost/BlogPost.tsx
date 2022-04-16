import { useState, useEffect } from 'react';
import "./BlogPost.scss";
interface comment{
    id: number;
    user:{
        id: number;
        name: string;
        avatar: string;
    }
    content: string;
    date: Date;
}

interface blog{
    title: string;
    likeCount: number;
    comment:comment[];
    shareCount: number;
    description: string;
    category: string;
    author: string;
    date: Date;
    image: {
        url: string;
        title: string;
    };
    id: number;
    content: string;
}


interface blogPostProps{
    blog: blog;
}

const BlogPost =  ({blog}: blogPostProps) =>{

    const [comment, setComment] = useState<comment[]>(blog.comment);
    // fuck typescript
    const content = {__html: blog.content};


    return (
        <div className="blog-post">
            <h1>{blog.title}</h1>
            <div className="author-box">
                <span className="author-name">
                    Tác giả: 
                    <strong>{blog.author}</strong>
                </span>
                <span className="date">
                    Lần chỉnh sửa cuối {blog.date.toLocaleDateString()}
                </span>
            </div>
            <div className="blog-description">
                {blog.description}
            </div>
            <div className="blog-content" dangerouslySetInnerHTML={content}/>
            <div className="blog-action">
                <div className="blog-action-item">
                    <span className="icon-like">
                        <i className="fas fa-heart"></i>
                    </span>
                    <span className="like-count">
                        {blog.likeCount}
                    </span>
                </div>
                <div className="blog-action-item">
                    <span className="icon-comment">
                        <i className="fas fa-comment"></i>
                    </span>
                    <span className="comment-count">
                        {blog.comment.length}
                    </span>
                </div>
                <div className="blog-action-item">
                    <span className="icon-share">
                        <i className="fas fa-share-alt"></i>
                    </span>
                    <span className="share-count">
                        {blog.shareCount}
                    </span>
                </div>
            </div>
        </div>
    )
}


export default BlogPost
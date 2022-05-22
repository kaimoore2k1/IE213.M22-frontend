import { blog, comment } from "../../../components/core/type";
import { decode } from "html-entities";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import { CommentIcon, ShareIcon } from "../../../assets/icons/BlogCustomIcon";
import CommentEditor from "../../../components/core/CommentEditor";
import Comment from "../../../components/core/Comment";
import { useMutation } from "@apollo/client";
import { likeBlog } from "../../../graphql/schema/blog.graphql";
import { useAuthContext } from "../../../modules/context/AuthContext";
import { useState } from "react";

import JWTManager from "../../../modules/utils/jwt";

interface blogSingleProps {
  blog: blog;
  comments: comment[];
}

const BlogSingle = ({ blog, comments }: blogSingleProps) => {
  const date = new Date(blog.date).toDateString();
  const [like, { error, data }] = useMutation(
    likeBlog(blog._id, JWTManager.getUsername() ?? "")
  );
  const { isAuthenticated } = useAuthContext();
  const [liked, setLiked] = useState(
    blog.like.includes(JWTManager.getUsername() ?? "")
  );

  return (
    <div className="blog-single">
      <h1>{blog.title}</h1>
      <div className="author-box">
        <span className="author-name">
          Tác giả:
          <strong> {blog.author}</strong>
        </span>
        <span className="date">Lần chỉnh sửa cuối {date}</span>
      </div>
      <div className="blog-description">{blog.description}</div>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: decode(blog.content) }}
      />
      <div className="blog-detail-action">
        <div
          style={isAuthenticated ? { cursor: "not-allowed" } : {}}
          className="like-container blog-action-item"
          onClick={() => {
            if (isAuthenticated) {
              like({});
            }
          }}
        >
          <span>{blog.like.length}</span>
          {liked ? <LikeFilled /> : <LikeOutlined />}
        </div>
        <div className="blog-action-item">
          <span>{comments.length}</span>
          <CommentIcon />
        </div>
        <div className="blog-action-item">
          <span>{blog.share}</span>
          <ShareIcon />
        </div>
      </div>
      <div className="comment-section">
        <CommentEditor idBlog={blog._id} type="comment" />
        <div className="comment-list">
          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default BlogSingle;

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
import { message } from "antd";
import JWTManager from "../../../modules/utils/jwt";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

interface blogSingleProps {
  blog: blog;
  comments: comment[];
}

const BlogSingle = ({ blog, comments }: blogSingleProps) => {
  const date = new Date(blog.date).toDateString();
  const blogName = useParams().blogName ?? "";
  const [like, { error, data }] = useMutation(likeBlog);
  const { isAuthenticated } = useAuthContext();
  const [likeCount, setLikeCount] = useState(blog.like.length);
  const [liked, setLiked] = useState(
    blog.like.includes(JWTManager.getUsername() ?? "")
  );

  const likeHandler = async () => {
    const user = JWTManager.getUsername() ?? "";
    if (isAuthenticated) {
      const likeProcess = await like({
        variables: {
          _id: blog._id,
          user,
        },
        onCompleted: () => {

          if (liked) {
            setLikeCount(likeCount - 1);
          } else {
            setLikeCount(likeCount + 1);
          }
          setLiked(!liked);
        },

      });
      if(error){
        message.error({
          content: "Đã có lỗi xảy ra, vui lòng thử lại sau",
          key: "like",
          duration: 1,
        });
        console.log(error);
      }
    }
  };
  return (
    <>
      <Helmet>
        <title>{blog.title}</title>
        <meta name="title" content={blog.title} />
        <meta name="description" content={blog.description} />
        <link rel="canonical" href={`https://senshop.tech/${blogName}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:url" content={`https://senshop.tech/${blogName}`} />
        <meta property="og:image" content={blog.image.url} />
        <meta property="og:description" content={blog.description} />
      </Helmet>
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
            onClick={likeHandler}
          >
            <span>{likeCount}</span>
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
    </>
  );
};
export default BlogSingle;

import { blog } from "../../../components/core/type";
import Loader from "../../../components/core/Loader";
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
import { useQuery } from "@apollo/client";
import { getCommentsByBlogID } from "../../../graphql/schema/comment.graphql";

interface blogSingleProps {
  blog: blog;
}

const BlogSingle = ({ blog }: blogSingleProps) => {
  const comments = useQuery(getCommentsByBlogID(blog._id));
  const date = new Date(blog.date).toDateString();
  const blogName = useParams().blogName ?? "";
  const [like, { error, data }] = useMutation(likeBlog);
  const { isAuthenticated } = useAuthContext();
  const [blogLike, setBlogLike] = useState(blog.like);
  const user = JWTManager.getUsername() ?? "";
  console.log(blog._id);
  
  const likeHandler = async () => {
    if (isAuthenticated) {
      const likeProcess = await like({
        variables: {
          _id: blog._id,
          user,
        },
        onCompleted: () => {
          if (blogLike.includes(user)) {
            setBlogLike(blogLike.filter((e) => e !== user));
          } else {
            setBlogLike(blogLike.concat(user));
          }
        },
      });
      if (error) {
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
            <span>{blogLike.length}</span>
            {blogLike.includes(user) ? <LikeFilled /> : <LikeOutlined />}
          </div>
          <div className="blog-action-item">
            <span>{comments?.data?.getCommentsByBlogID?.length ?? "0"}</span>
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
            {comments.loading ? (
              <Loader />
            ) : (
              <>
                {comments.error ? (
                  message.error({ content: "Lỗi khi tải bình luận" })
                ) : (
                  <>
                    {comments.data.getCommentsByBlogID.map(
                      (comment: any, index: any) => (
                        <Comment key={index} comment={comment} />
                      )
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogSingle;

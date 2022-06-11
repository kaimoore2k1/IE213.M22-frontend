import { blog } from "../../../components/core/type";
import Loader from "../../../components/core/Loader";
import { decode } from "html-entities";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import { CommentIcon, ShareIcon } from "../../../assets/icons/BlogCustomIcon";
import CommentEditor from "../../../components/core/CommentEditor";
import Comment from "../../../components/core/Comment";
import { useMutation } from "@apollo/client";
import { LIKE_BLOG, SHARE_BLOG } from "../../../graphql/mutations/blog.graphql";
import { useAuthContext } from "../../../modules/context/AuthContext";
import { useEffect, useState } from "react";
import { message, Dropdown, Menu, Button } from "antd";
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
  const [like, { error, data }] = useMutation(LIKE_BLOG);
  const [share] = useMutation(SHARE_BLOG);
  const { isAuthenticated } = useAuthContext();
  const [blogLike, setBlogLike] = useState(blog.like);
  const [blogShare, setBlogShare] = useState(blog.share);
  const user = JWTManager.getUsername() ?? "";
  // useEffect(() => {
  //   window.localStorage.setItem("recentBlog", JSON.stringify(blog));
  // },[])
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
      }
    }
  };
  const shareHandler = () => {
    share({
      variables: {
        _id: blog._id,
      },
      onCompleted: () => {
        setBlogShare(blogShare + 1);
      },
      onError: () => {
        console.log("share error");
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <link
          rel="canonical"
          href={`https://senshop.tech/tap-chi/${blogName}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta
          property="og:url"
          content={`https://senshop.tech/tap-chi/${blogName}`}
        />
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
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a
                    rel="noreferrer noopener"
                    target="_blank"
                    href={`http://www.facebook.com/sharer.php?u=https://senshop.tech/tap-chi/${blogName}`}
                    title="Share to Facebook"
                    onClick={shareHandler}
                  >
                    Chia sẻ đến facebook
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    rel="noreferrer noopener"
                    target="_blank"
                    href={`https://twitter.com/intent/tweet?url=https://senshop.tech/tap-chi/${blogName}`}
                    title="Share to Twitter"
                    onClick={shareHandler}
                  >
                    Chia sẻ đến twitter
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `https://senshop.tech/${blogName}`
                      );
                      message.success({
                        content: "Đã copy link bài viết",
                        key: "copy",
                      });
                      shareHandler();
                    }}
                  >
                    Copy Link
                  </a>
                </Menu.Item>
              </Menu>
            }
            placement="bottomLeft"
          >
            <div className="blog-action-item">
              <span>{blogShare}</span>
              <ShareIcon />
            </div>
          </Dropdown>
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

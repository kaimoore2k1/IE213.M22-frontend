import { Card } from "antd";
import {
  LikeIcon,
  CommentIcon,
  ShareIcon,
} from "../../../assets/icons/BlogCustomIcon";
import "../../../sass/Blog/BlogCard.scss";
import { Link } from "react-router-dom";
import toSlug from "../../../assets/toSlug";
export interface blogCard {
  title: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  description?: string;
  categories?: string;
  images: {
    url: string;
    title: string;
  };
  id: number;
  author: string;
  date: Date;
}
export interface blogCardProps {
  type: "small" | "large";
  blog: blogCard;
}

const BlogCard = ({ type, blog }: blogCardProps) => {
  return (
    <>
      {type === "small" ? (
        <Card
          className="blog-card-small"
          id={`blog-card-${blog.id}`}
          hoverable={true}
          cover={
            <Link to={`/tapchi/${toSlug(blog.title)}`}>
              <img src={blog.images.url} alt="blog" />
            </Link>
          }
        >
          <Card.Meta
            title={
              <Link to={`/tapchi/${toSlug(blog.title)}`}>{blog.title}</Link>
            }
            description={
              <div className="blog-card-info__top">
                <div className="blog-card-date">{blog.date.toDateString()}</div>
                <div className="blog-card-author">{blog.author}</div>
              </div>
            }
          />
          <div className="blog-card-footer">
            <div className="like-count">
              <span>{blog.likeCount}</span>
              <LikeIcon />
            </div>
            <div className="comment-count">
              <span>{blog.commentCount}</span>
              <CommentIcon />
            </div>
            <div className="share-count">
              <span>{blog.shareCount}</span>
              <ShareIcon />
            </div>
          </div>
        </Card>
      ) : (
        <Card
          className="blog-card-large"
          id={`blog-card-${blog.id}`}
          hoverable={true}
          cover={
            <div className="blog-card-image__container">
              <Link to={`/tapchi/${toSlug(blog.title)}`}>
                <img src={blog.images.url} alt="blog" />
              </Link>
              <div className="blog-card-category">
                <span>{blog.categories}</span>
              </div>
            </div>
          }
        >
          <Card.Meta
            title={
              <Link to={`/tapchi/${toSlug(blog.title)}`}>{blog.title}</Link>
            }
            description={
              <>
                <div className="blog-card-info__top">
                  <div className="blog-card-date">
                    {blog.date.toDateString()}
                  </div>
                  <div className="blog-card-author">{blog.author}</div>
                </div>
                <p className="blog-card-description">{blog.description}</p>
              </>
            }
          />
          <div className="blog-card-footer">
            <div className="like-count">
              <span>{blog.likeCount}</span>
              <LikeIcon />
            </div>
            <div className="comment-count">
              <span>{blog.commentCount}</span>
              <CommentIcon />
            </div>
            <div className="share-count">
              <span>{blog.shareCount}</span>
              <ShareIcon />
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default BlogCard;

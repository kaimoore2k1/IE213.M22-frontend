import { Card } from "antd";
import {
  LikeIcon,
  CommentIcon,
  ShareIcon,
} from "../../../assets/icons/BlogCustomIcon";
import "../../../sass/Blog/BlogCard.scss";
import { Link } from "react-router-dom";
import toSlug from "../../../assets/toSlug";
import moment from "moment";

moment.locale("vi");
export interface blogCard {
  title: string;
  like: string[];
  comments: any;
  share: number;
  description?: string;
  category?: string;
  image: {
    url: string;
  };
  _id: string;
  author: string;
  date: Date;
}
export interface blogCardProps {
  type: "small" | "large";
  blog: blogCard;
}

const BlogCard = ({ type, blog }: blogCardProps) => {
  const date = new Date(blog.date);
  return (
    <>
      {type === "small" ? (
        <Card
          className="blog-card-small"
          id={`blog-card-${blog._id}`}
          hoverable={true}
          cover={
            <Link to={`/tap-chi/${toSlug(blog.title)}`}>
              <img src={blog.image.url} alt={blog.title} />
            </Link>
          }
        >
          <Card.Meta
            title={
              <Link to={`/tap-chi/${toSlug(blog.title)}`}>{blog.title}</Link>
            }
            description={
              <div className="blog-card-info__top">
                <div className="blog-card-date">{moment(date).format("DD/MM/YYYY")}</div>
                <div className="blog-card-author">{blog.author}</div>
              </div>
            }
          />
          <div className="blog-card-footer">
            <div className="like-count">
              <span>{blog.like.length}</span>
              <LikeIcon />
            </div>
            <div className="comment-count">
              <span>{blog.comments.length}</span>
              <CommentIcon />
            </div>
            <div className="share-count">
              <span>{blog.share}</span>
              <ShareIcon />
            </div>
          </div>
        </Card>
      ) : (
        <Card
          className="blog-card-large"
          id={`blog-card-${blog._id}`}
          hoverable={true}
          cover={
            <div className="blog-card-image__container">
              <Link to={`/tap-chi/${toSlug(blog.title)}`}>
                <img src={blog.image.url} alt="blog" />
              </Link>
              <div className="blog-card-category">
                <span>{blog.category}</span>
              </div>
            </div>
          }
        >
          <Card.Meta
            title={
              <Link to={`/tap-chi/${toSlug(blog.title)}`}>{blog.title}</Link>
            }
            description={
              <>
                <div className="blog-card-info__top">
                  <div className="blog-card-date">
                    {moment(date).format("DD/MM/YYYY")}
                  </div>
                  <div className="blog-card-author">{blog.author}</div>
                </div>
                <p className="blog-card-description">{blog.description}</p>
              </>
            }
          />
          <div className="blog-card-footer">
            <div className="like-count">
              <span>{blog.like.length}</span>
              <LikeIcon />
            </div>
            <div className="comment-count">
              <span>{blog.comments.length}</span>
              <CommentIcon />
            </div>
            <div className="share-count">
              <span>{blog.share}</span>
              <ShareIcon />
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default BlogCard;

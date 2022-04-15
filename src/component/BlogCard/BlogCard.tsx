import { Card } from "antd";
import { LikeIcon, CommentIcon, ShareIcon } from "../CustomIcon";
import "./BlogCard.scss";

export interface blogCard {
  title: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  description?: string;
  category?: string;
  image: {
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
          cover={<img src={blog.image.url} />}
        >
          <Card.Meta
            title={blog.title}
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
              <img src={blog.image.url} />
              <div className="blog-card-category">
                <span>{blog.category}</span>
              </div>
            </div>
          }
        >
          <Card.Meta
            title={blog.title}
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

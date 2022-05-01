import React from "react";
import { Comment as AntdComment, Avatar, Tooltip, Rate } from "antd";
import moment from "moment";
import { comment } from "./type";

interface commentProps {
  comment: comment;
}

function Comment({ comment }: commentProps) {
  return (
    <AntdComment
      author={<a>{comment.author.name}</a>}
      avatar={
        <Avatar
          src={comment.author.avatar.url}
          alt={comment.author.avatar.alt ?? comment.author.name}
        />
      }
      content={<p>{comment.content}</p>}
      datetime={
        <>
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
          <br />
          {comment.rating && <Rate value={comment.rating} disabled />}
        </>
      }
    />
  );
}

export default Comment;

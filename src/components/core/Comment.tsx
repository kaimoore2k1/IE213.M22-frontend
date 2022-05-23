import React from "react";
import { Comment as AntdComment, Avatar, Tooltip, Rate } from "antd";
import moment from "moment";
import 'moment/locale/vi';
import { comment } from "./type";
import { UserOutlined } from "@ant-design/icons";

moment.locale('vi');
interface commentProps {
  comment: comment;
}

function Comment({ comment }: commentProps) {
  const date = new Date(comment.date).toDateString();
  return (
    <AntdComment
      author={<a>{comment.user}</a>}
      avatar={<Avatar size={48} icon={<UserOutlined />} />}
      content={
        <>
          {comment.rating && <Rate  value={comment.rating} disabled />}
          <p>{comment.content}</p>
        </>
      }
      datetime={
        <>
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment(date).lang('vi').fromNow()}</span>
          </Tooltip>
        </>
      }
    />
  );
}

export default Comment;

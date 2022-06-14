import {
  Comment as AntdComment,
  Avatar,
  Tooltip,
  Rate,
  Button,
  Popconfirm,
  message,
} from "antd";
import moment from "moment";
import "moment/locale/vi";
import { comment } from "./type";
import { useState } from "react";
import { UserOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useAuthContext } from "../../modules/context/AuthContext";
import JWTManager from "../../modules/utils/jwt";
import { decode, encode } from "html-entities";
import {
  getCommentsByProductID,
  getCommentsByBlogID,
} from "../../graphql/schema/comment.graphql";
import {
  UPDATE_COMMENT,
  DELETE_COMMENT,
} from "../../graphql/mutations/comment.graphql";
import { useMutation } from "@apollo/client";

moment.locale("vi");
interface commentProps {
  comment: comment;
}

function Comment({ comment }: commentProps) {
  const date = new Date(comment.date);
  const [edit, setEdit] = useState<boolean>(false);
  const { isAuthenticated } = useAuthContext();
  const [rating, setRating] = useState(comment.rating ?? null);
  const [update] = useMutation(UPDATE_COMMENT);
  const [_delete] = useMutation(DELETE_COMMENT);

  //edit comment fuction ->trigger edit btn
  //-> set comment content atribute contenteditable="true"
  //-> set rating !disabled
  //-> change edit and delete button to save button (by change state)
  //-> send request to server

  const deleteHandler = () => {
    _delete({
      variables: {
        _id: comment._id,
      },
      onCompleted: () => {
        message.success("Deleted successfully!");
      },
      refetchQueries: !!comment.idProduct
        ? [getCommentsByProductID(comment.idProduct)]
        : [getCommentsByBlogID(comment.idBlog)],
      onError: () => {
        message.error("Error!");
      },
    });
  };

  const editHandler = () => {
    setEdit(true);
    const commentContent = document.querySelector<HTMLInputElement>(
      `#comment-content_${comment._id}`
    );
    commentContent?.setAttribute("contenteditable", "true");
    commentContent?.focus();
  };
  const updateHandler = () => {
    const commentContent = document.querySelector(
      `#comment-content_${comment._id}`
    );

    if (commentContent?.innerHTML == "") {
      message.error("Bạn chưa nhập nội dung bình luận");
    } else {
      update({
        variables: {
          _id: comment._id,
          content: commentContent?.innerHTML ?? "",
          rating: rating,
          user: JWTManager.getUsername(),
        },
        onCompleted: () => {
          commentContent?.setAttribute("contenteditable", "false");
          message.success("Updated successfully!");
          setEdit(false);
        },
        onError: () => {
          message.error("Update error!");
          setEdit(false);
          commentContent?.setAttribute("contenteditable", "false");
          if (commentContent != undefined) {
            commentContent.innerHTML = comment.content;
          }
        },
      });
    }
  };
  return (
    <AntdComment
      author={<a>{comment.user}</a>}
      avatar={<Avatar size={48} icon={<UserOutlined />} />}
      content={
        <>
          {comment?.rating && (
            <Rate
              onChange={(value) => setRating(value)}
              defaultValue={comment.rating}
              disabled={!edit}
              allowHalf
            />
          )}
          <p id={`comment-content_${comment._id}`}>{decode(comment.content)}</p>
        </>
      }
      datetime={
        <>
          <Tooltip title={moment(date).format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment(date).from(new Date())}</span>
          </Tooltip>
        </>
      }
      actions={[
        <>
          {isAuthenticated && JWTManager.getUsername() === comment.user && (
            <>
              {!edit ? (
                <>
                  <Button
                    type="text"
                    icon={<EditOutlined />}
                    onClick={editHandler}
                  >
                    Chỉnh sửa
                  </Button>
                  <Popconfirm
                    title="Bạn có chắc xoá bình luận này không"
                    onConfirm={deleteHandler}
                    cancelText="Hủy"
                    okText="Xoá"
                    okButtonProps={{ danger: true }}
                  >
                    <Button type="text" icon={<DeleteOutlined />}>
                      Xóa
                    </Button>
                  </Popconfirm>
                </>
              ) : (
                <Button onClick={updateHandler} type="primary">
                  Lưu
                </Button>
              )}
            </>
          )}
        </>,
      ]}
    />
  );
}

export default Comment;

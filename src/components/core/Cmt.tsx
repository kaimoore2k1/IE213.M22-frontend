import React from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import {useState} from 'react'
import moment from 'moment';
import {CommentState} from './type'

const { TextArea } = Input;


const CommentList = ({ comments }:CommentState) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }:any) => (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
  );

  

function Cmt() {

    const initialState:CommentState = {
        comments: [],
        submitting: false,
        value: '',
      };

    const [state, setState] = useState(initialState)

    const handleSubmit = () => {

        if (!state.value) {
            return;
        }

        setState({
            ...state,
            submitting: true,
        });

        setTimeout(() => {
            setState({
              submitting: false,
              value: '',
              comments: [
                ...state.comments,
                {
                  author: 'Han Solo',
                  avatar: 'https://joeschmoe.io/api/v1/random',
                  content: <p>{state.value}</p>,
                  datetime: moment().fromNow(),
                },
              ],
            });
          }, 1000);
    }
    const handleChange = (e: { target: { value: any; }; }) => {
        setState({
            ...state,
          value: e.target.value,
        });
      };


  return (
    <>
        {state.comments.length > 0 && <CommentList comments={state.comments} submitting={state.submitting} value={state.value} />}
        <Comment
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={state.submitting}
              value={state.value}
            />
          }
        />
      </>
  )
}

export default Cmt
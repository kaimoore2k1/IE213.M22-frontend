import React from 'react'
import { comment } from './Data';
import Cmt from '../../components/core/Cmt';
import "../../sass/DetailProduct/Feedback.scss";
export default function Comment() {
  return (
    <>
      <p id='title'>Đánh giá của khách hàng</p>
      {comment.map((cmt) => (
        
        <div className='comment'>
          <img src="https://joeschmoe.io/api/v1/random" alt="" />
          <p>{cmt.owner}</p>
          <p>{cmt.content}</p>
        
          <br />
        </div>
        
      ))}
      <Cmt />

    </>
  )
}

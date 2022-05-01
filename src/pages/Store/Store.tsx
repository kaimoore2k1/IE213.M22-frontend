import React from 'react'
import { Row, Col } from "antd";
import {Outlet, useLocation} from 'react-router-dom'
import {Category} from "../../components/core"


function Store() {
  const location = useLocation()
  console.log(location)
  return (
    <div className="store__layout">
      <Row>
        <Col span={7} className="store__layout--sidebar">
          <Category />
        </Col>
        <Col span={17} className="store__layout--content">
          <Outlet />
        </Col>
      </Row>
    </div>
  )
}

export default Store
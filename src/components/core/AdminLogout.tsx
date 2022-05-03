import { Menu } from 'antd'
import React from 'react'
import { LogoutOutlined } from "@ant-design/icons";

function AdminLogout() {
  return (
    <Menu>
        <Menu.Item icon={<LogoutOutlined />}>Logout</Menu.Item>
    </Menu>
  )
}

export default AdminLogout
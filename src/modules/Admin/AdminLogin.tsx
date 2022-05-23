import { Avatar, Dropdown, Space } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import AdminLogout from "../../components/core/AdminLogout";
import JWTManager from "../../modules/utils/jwt";
import { useAuthContext } from "../context/AuthContext";

function AdminLogin() {
  const { isAuthenticated } = useAuthContext();

  return (
    <>
      {isAuthenticated ? (
        <>
          <div
            style={{
              display: "inline-block",
              position: "absolute",
              right: "0",
              marginRight: "2%",
              minWidth: "8%",
            }}
          >
            <Dropdown overlay={<AdminLogout />}>
              <Space>
                <Avatar
                  style={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    marginRight: "10px",
                  }}
                  icon={<UserOutlined />}
                />
                {JWTManager.getUsername()}
              </Space>
            </Dropdown>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default AdminLogin;

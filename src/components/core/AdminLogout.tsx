import { Menu } from 'antd'
import { useNavigate } from "react-router-dom";
import JWTManager from "../../modules/utils/jwt"
import { LogoutOutlined } from "@ant-design/icons";
import { useAuthContext } from '../../modules/context/AuthContext';
import { useMutation } from '@apollo/client';
import { LOGOUT } from '../../graphql/mutations/logout.graphql';
function AdminLogout() {
  const navigate = useNavigate();
  const {logoutClient } = useAuthContext();
  const [logoutServer, _] = useMutation(LOGOUT)

  const onClick = async () => {
    logoutClient()
    await logoutServer({ variables: { username: JWTManager.getUsername() } })
    navigate('..')
  }
  return (
    <Menu>
        <Menu.Item icon={<LogoutOutlined />} onClick={onClick}>Logout</Menu.Item>
    </Menu>
  )
}

export default AdminLogout
import { useQuery } from "@apollo/client";
import {
  useState,
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { getAdminByName } from "../../graphql/schema/admin.graphql";
import JWTManager from "../utils/jwt";

interface IAuthContext {
  isAdmin: boolean; //Kiểm tra người đăng nhập có phải là admin không?
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
  isAuthenticated: boolean; //xac thuc nguoi dung dang nhap chua
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>; //Lay refresh token tu cookie
  checkAuth: () => Promise<void>; // lay getRefreshToken de dang nhap ngay lap tuc
  logoutClient: () => void;
  // checkAdmin: () => void
}

const defaultIsAuthenticated = false;

export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: defaultIsAuthenticated,
  setIsAuthenticated: () => {},
  checkAuth: () => Promise.resolve(),
  logoutClient: () => {},
  isAdmin: defaultIsAuthenticated,
  setIsAdmin: () => {},
  // checkAdmin: () => Promise.resolve(),
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    defaultIsAuthenticated
  );
  const [isAdmin, setIsAdmin] = useState(defaultIsAuthenticated);

  const checkAuth = useCallback(async () => {
    const token = JWTManager.getToken();
    if (token) {
      setIsAuthenticated(true);
    } else {
      const success = await JWTManager.getRefreshToken();
      if (success) {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const check = useQuery(getAdminByName, {
    variables: {
      username: JWTManager.getUsername(),
    },
  });

  useEffect(() => {
    if (check.data) {
      if (check.data?.getAdminByName?.success) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, [check.data]);
  // const token = JWTManager.getToken();
  // const checkAdmin = useEffect(() =>{
  //     const refreshToken = async () => {
  //         return await JWTManager.getRefreshToken()

  //     }
  //     console.log('data:', check.data)
  //     const result = refreshToken()
  //     // if(check.data){

  //     //     if(token || result) {

  //     //         if (check.loading) return <p>loadingQuery.....</p>;
  //     //         if (check.error) return <p>errorQuery</p>;
  //     //         setIsAdmin(true) //loi sai
  //     //     }
  //     // }

  // },[])
  // console.log(checkAdmin)

  // const {loading, error, data} = useQuery(getAdminByName, {
  //     variables: {
  //         username: JWTManager.getUsername() ?? false
  //     }
  // })
  // // const checkAdmin = data.getAdminByName;
  // // if(data.getAdminByName.username){
  // //     setIsAdmin(true)
  // // }
  // if (loading) return <p>Loading.....</p>;
  // if (error) return <p>error</p>;
  // console.log('data: ', data.getAdminByName.username)
  const logoutClient = () => {
    JWTManager.deleteToken();
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  const authContextData = {
    isAuthenticated,
    setIsAuthenticated,
    checkAuth,
    logoutClient,
    isAdmin,
    // checkAdmin,
    setIsAdmin,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}{" "}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

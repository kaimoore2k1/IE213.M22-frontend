import "antd/dist/antd.min.css";
import { useEffect, useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/core/Loader";
import { useAuthContext } from "./modules/context/AuthContext";
import RouterView from "./router/router";
import { handelRecursion } from "./router/type";
import "./sass/App.scss";

function App() {
  const { checkAuth } = useAuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      await checkAuth();
      setLoading(false);
    };

    authenticate();
  }, [checkAuth]);
  if (loading) <Loader />;
  
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          {RouterView.map((router, index) => {
            return (
              <Route
                key={index}
                path={router.path}
                element={<router.element />}
              >
                {handelRecursion(router)}
              </Route>
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

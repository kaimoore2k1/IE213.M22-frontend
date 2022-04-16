import React from "react";
import "./sass/App.scss";
import "antd/dist/antd.min.css";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Pet from "./pages/Pet";
import Shop from "./pages/Shop";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Intro from "./pages/Intro";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout/Layout";
import RouterView from "./router/router";
import { handelRecursion } from "./router/type"



function App() {
  return (
    <div className="App">
      <Routes>
        {RouterView.map((router, index) => {
          return (
            <Route key={index} path={router.path} element={<router.element />}>
              {handelRecursion(router)}
            </Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;

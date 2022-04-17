import React from "react";
import "./sass/App.scss";
import "antd/dist/antd.min.css";
import { Route, Routes } from "react-router-dom";
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

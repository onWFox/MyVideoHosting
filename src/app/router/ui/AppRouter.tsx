import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteConfig } from "../config/RouterConfig";

const AppRouter = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
      {Object.values(RouteConfig).map(({element, path})=>(
            <Route key={path} path={path} element={<div className="page-wrapper">{element}</div> } />
          ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

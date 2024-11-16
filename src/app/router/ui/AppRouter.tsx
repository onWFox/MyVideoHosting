import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteConfig } from "../config/RouterConfig";
import Loader from "../../../shared/Loader";

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
      {Object.values(RouteConfig).map(({element, path})=>(
            <Route key={path} path={path} element={<div className="page-wrapper">{element}</div> } />
          ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

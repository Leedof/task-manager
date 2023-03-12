import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { LayoutPage } from "./layout";
import { AuthPage } from "./auth";
import { useDispatch, useSelector } from "react-redux";
import { authMe, selectIsInitialized } from "../store";
import { useEffect } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<LayoutPage />}>
        <Route path="home" element={<div>Main bord</div>} />
        <Route path="health" element={<div>TASKS</div>} />
        <Route path="business" element={<div>profile</div>} />
        <Route path="education" element={<div>profile</div>} />
      </Route>
      <Route path="login" element={<AuthPage isLogin={true} />} />
      <Route path="register" element={<AuthPage isLogin={false} />} />
      <Route path="*" element={<div>Page not found 404</div>} />
    </Route>
  )
);

const Routing = () => {
  const isInit = useSelector(selectIsInitialized);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authMe());
  }, [dispatch]);

  return isInit ? <RouterProvider router={router} /> : <div>Loading...</div>;
};

export default Routing;

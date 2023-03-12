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
    <Route>
      <Route path="/" element={<LayoutPage />}>
        <Route path="health" element={<LayoutPage />} />
        <Route path="business" element={<LayoutPage />} />
        <Route path="education" element={<LayoutPage />} />
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

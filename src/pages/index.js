import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { LayoutPage } from "./layout";
import { AuthPage } from "./auth";
import { NotFound } from "./notFound";
import { useDispatch, useSelector } from "react-redux";
import { authMe, selectIsInitialized } from "../store";
import { useEffect } from "react";
import { Loader } from "./../UI/Loader";

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LayoutPage />}>
        <Route path="health" element={<LayoutPage />} />
        <Route path="business" element={<LayoutPage />} />
        <Route path="education" element={<LayoutPage />} />
      </Route>
      <Route path="login" element={<AuthPage isLogin={true} />} />
      <Route path="register" element={<AuthPage isLogin={false} />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const Routing = () => {
  const isInit = useSelector(selectIsInitialized);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authMe());
  }, [dispatch]);

  return isInit ? <RouterProvider router={router} /> : <Loader />;
};

export default Routing;

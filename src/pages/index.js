import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout";
import { LoginPage } from "./login";
import { SignUpPage } from "./signUp";

import { defaultTheme } from "./../assets/defaultTheme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Main bord</div>} />
        <Route path="board" element={<div>TASKS</div>} />
        <Route path="profile" element={<div>profile</div>} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<SignUpPage />} />
      <Route path="*" element={<div>Page not found 404</div>} />
    </Route>
  )
);

const Routing = () => {
  console.log(defaultTheme);
  return <RouterProvider router={router} />;
};

export default Routing;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout";
import Login from "./login";
import SignUp from "./signUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Main bord</div>} />
        <Route path="board" element={<div>TASKS</div>} />
        <Route path="profile" element={<div>profile</div>} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<SignUp />} />
      <Route path="*" element={<div>Page not found 404</div>} />
    </Route>
  )
);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;

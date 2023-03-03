import { Outlet } from "react-router-dom";

export const LayoutPage = () => {
  return (
    <div>
      <header>Header</header>
      <div>Sidebar</div>
      <div>Depends on URL section</div>
      <Outlet />
    </div>
  );
};


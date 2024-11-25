import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <>
      {" "}
      <div className="font-inter min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;

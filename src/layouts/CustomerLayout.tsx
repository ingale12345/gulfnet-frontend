import { Outlet } from "react-router-dom";

const CustomerLayout = () => (
  <main className="min-h-screen p-4  min-w-[100vw] ">
    {/* No sidebar or login nav */}
    <Outlet />
  </main>
);
export default CustomerLayout;

import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import CustomerLayout from "@/layouts/CustomerLayout";
import HQLayout from "@/layouts/HQLayout";
import ManagerLayout from "@/layouts/ManagerLayout";
import LoginPage from "@/pages/Login";
import Unauthorized from "@/pages/Unauthorized";
import Home from "@/pages/customer/Home";
import HQDashboard from "@/pages/hq/Dashboard";
import ManagerDashboard from "@/pages/manager/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      { index: true, element: <Home /> },
      // customer routes are public
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    element: <ProtectedRoute allowedRoles={["hq_admin"]} />,
    children: [
      {
        path: "/hq",
        element: <HQLayout />,
        children: [{ index: true, element: <HQDashboard /> }],
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={["manager"]} />,
    children: [
      {
        path: "/manager",
        element: <ManagerLayout />,
        children: [{ index: true, element: <ManagerDashboard /> }],
      },
    ],
  },
]);

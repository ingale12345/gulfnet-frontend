import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export const ProtectedRoute = ({
  allowedRoles,
}: {
  allowedRoles: string[];
}) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (!allowedRoles.includes(role!)) return <Navigate to="/unauthorized" />;

  return <Outlet />;
};

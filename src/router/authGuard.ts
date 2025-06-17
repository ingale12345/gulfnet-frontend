// router/authGuard.ts
import { redirect } from "react-router-dom";
// import { useAuthStore } from "@/store/authStore";

export const authGuard = (allowedRoles: string[]) => () => {
  // const { isAuthenticated, role } = useAuthStore.getState();
  const { isAuthenticated, role } = { isAuthenticated: true, role: "hq_admin" }; // added temporary default values

  if (!isAuthenticated) return redirect("/login");
  if (!allowedRoles.includes(role!)) return redirect("/unauthorized");
  return null;
};

import { Navigate } from "react-router";

function ProtectRoutes({ children, user }) {
  if (user) return children;

  return <Navigate to="/login" />;
}

export default ProtectRoutes;

import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ component: Component }) {
  const { isAuthenticated } = useContext(AuthContext)


	return isAuthenticated ? <Component /> : <Navigate to="/login" />
}
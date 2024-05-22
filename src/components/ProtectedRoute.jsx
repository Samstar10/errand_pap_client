import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { Route, Navigate, Routes } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { authState } = useContext(AuthContext)


	return (
		<Routes>
				<Route
				{...rest}
				render={(props) =>
					authState.isAuthenticated ? (
						<Component {...props} />
					) : (
						<Navigate to="/login" />
					)
				}
			/>
		</Routes>
	)
}
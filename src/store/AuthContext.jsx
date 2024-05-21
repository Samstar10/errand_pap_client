import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: null,
        refreshToken: null,
        isAuthenticated: false
    })

    const login = (token, refreshToken) => {
        setAuthState({
            token,
            refreshToken,
            isAuthenticated: true
        })
    }

    const logout = () => {
        setAuthState({
            token: null,
            refreshToken: null,
            isAuthenticated: false
        })
    }

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
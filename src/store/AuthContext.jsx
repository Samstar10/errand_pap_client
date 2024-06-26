import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";

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

        localStorage.setItem('token', token)
        localStorage.setItem('refreshToken', refreshToken)
        // console.log('Logged in:', { token, refreshToken });
        console.log(authState)
    }

    const logout = () => {
        setAuthState({
            token: null,
            refreshToken: null,
            isAuthenticated: false
        })

        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
    }

    const refreshToken = useCallback(async() => {
        try{
            const response = await axios.post("http://localhost:8000/auth/api/token/refresh/", {
                refresh: authState.refreshToken
            }, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            if(response.status === 200) {
                const data = response.data
                setAuthState(prevState => ({
                    ...prevState,
                    token: data.access
                }))
                localStorage.setItem('token', data.access)
                console.log('Token refreshed')
            } else {
                logout()
            }
        }

        catch (error) {
            console.log('Error refreshing token',error)
        }
    }, [authState.refreshToken])

    useEffect(() => {
        const token = localStorage.getItem('token')
        const refreshToken = localStorage.getItem('refreshToken')
        if(token && refreshToken) {
            setAuthState({
                token: token,
                refreshToken: refreshToken,
                isAuthenticated: true
            })

            console.log('Auth state initialized from local storage');
        }
    }, [])

    useEffect(() => {
        if(authState.token) {
            const interval = setInterval(() => {
                refreshToken()
            }, 1000 * 60 * 15)

            return () => clearInterval(interval)
        }
    }, [authState.token, refreshToken])

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
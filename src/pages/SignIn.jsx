import { useContext, useState } from "react"
import { AuthContext } from "../store/AuthContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()

    const payload = new FormData()

    payload.append("Email", email)
    payload.append("password", password)

    const handleLogin = async(e) => {
        e.preventDefault()
        
        try{
            const response = await axios
            .post("http://localhost:8000/auth/api/token/", payload, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            
            if(response.status === 200) {
                console.log(response)

                login(response.data.access, response.data.refresh)

                console.log(isAuthenticated)

                navigate("/orders")
            }
        }

        catch (error) {
            console.log('Login failed ',error)
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
import { useContext, useState } from "react"
import { AuthContext } from "../store/AuthContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const payload = new FormData()

    payload.append("Email", email)
    payload.append("password", password)

    const handleLogin = async(e) => {
        e.preventDefault()
        
        try{
            const response = await axios
            .post("http://localhost:8000/auth/api/token/", payload)
            .then((response) => {
                console.log(response)
                login(response.access, response.refresh)
                navigate('/orders')
            })
            
            .catch((error) => {
                console.log('Login error', error)
            })
            console.log(response)
        }

        catch (error) {
            console.log(error)
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
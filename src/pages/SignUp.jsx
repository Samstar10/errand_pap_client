import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function SignUp() {
	const [formData, setFormData] = useState({
		Email: "",
		first_name: "",
		last_name: "",
		password: "",
		password2: "",
	})

	const navigate = useNavigate()
	// const url = meta.env.API_HOST_NAME

	const payload = new FormData()

	payload.append("Email", formData.Email)
	payload.append("first_name", formData.first_name)
	payload.append("last_name", formData.last_name)
	payload.append("password", formData.password)
	payload.append("password2", formData.password2)

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		
		if (formData.password !== formData.password2) {
			alert("Passwords do not match")
			return
		}

		try {
			axios
			.post("http://127.0.0.1:8000/users/register/", payload)
			.then((response) => {
				console.log(response)
				navigate("/login")
			})
			.catch((error) => {
				console.log(error)
			})
		}

		catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="Email">Email</label>
				<input
					type="text"
					name="Email"
					placeholder="Email"
					value={formData.Email}
					onChange={handleChange}
				/>

				<label htmlFor="first_name">First Name</label>
				<input
					type="text"
					name="first_name"
					placeholder="First Name"
					value={formData.first_name}
					onChange={handleChange}
				/>

				<label htmlFor="last_name">Last Name</label>
				<input
					type="text"
					name="last_name"
					placeholder="Last Name"
					value={formData.last_name}
					onChange={handleChange}
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={formData.password}
					onChange={handleChange}
				/>

				<label htmlFor="password2">Confirm Password</label>
				<input
					type="password"
					name="password2"
					placeholder="Confirm Password"
					value={formData.password2}
					onChange={handleChange}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	)
}
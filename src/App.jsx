import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import AuthProvider from './store/AuthContext'
import Orders from './pages/Orders.jsx'
// import ProtectedRoute from './components/ProtectedRoute.jsx'
import Home from './pages/Home.jsx'

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        {/* <Route path="/orders" element={<ProtectedRoute component={Orders} />} /> */}
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </AuthProvider>
  )
}

export default App

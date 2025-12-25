import './App.css'
import { Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import AccountSettingsPage from './pages/AccountSettingsPage'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="account-settings" element={<AccountSettingsPage />} />
      </Routes>
    </AuthProvider>
  )
}

export default App

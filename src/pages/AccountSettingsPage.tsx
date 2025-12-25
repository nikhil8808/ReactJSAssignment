import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const AccountSettingsPage = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  if (!user) {
    return (
      <div className='w-full h-screen flex justify-center bg-gray-300 items-center'>
        <div className='text-center'>
          <h2 className='text-2xl font-semibold mb-4'>Please log in first</h2>
          <button
            onClick={() => navigate('/sign-in')}
            className='bg-purple-600 text-white px-6 py-2 rounded-md font-semibold'
          >
            Go to Sign In
          </button>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className='w-full h-screen flex justify-center bg-gray-300'>
      <div className='w-full md:w-[50%] h-full bg-[#F7F8F9]'>
        <div className='h-[10vh] bg-white flex items-center justify-between px-4'>
          <h4 className='text-2xl font-semibold'>Account Settings</h4>
          <button
            onClick={handleLogout}
            className='bg-red-600 text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-red-700'
          >
            Logout
          </button>
        </div>
        <div className='flex flex-col px-3 py-8 gap-6 border-b-2  border-dotted'>
          <div className='flex items-start gap-4'>
            {/* profile photo */}
            <div>
              <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold'>
                {user?.email?.charAt(0).toUpperCase()}
              </div>
            </div>
            <div>
              <h4 className='font-semibold text-xl'>
                {'full_name' in user ? user.full_name : 'User'}
              </h4>
              <p className='text-md '>{user?.email}</p>
            </div>
          </div>
          <div>
            <p className='text-md text-gray-400'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSettingsPage
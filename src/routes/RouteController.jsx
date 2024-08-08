import { lazy , Suspense } from 'react'
import { Routes , Route } from 'react-router-dom'
const Register = lazy(() => import('./register/Register'));
const Login = lazy(() => import('./login/Login'));
const Profile = lazy(() => import('./profile/Profile'));

const RouteController = () => {
  return (
    <Routes>
        <Route path='profile' element={<Suspense fallback={<div>Loading...</div>}><Profile/></Suspense>} />
        <Route path='register' element={<Suspense fallback={<div>Loading...</div>}><Register/></Suspense>} />
        <Route path='login' element={<Suspense fallback={<div>Loading...</div>}><Login/></Suspense>} />

    </Routes>
  )
}

export default RouteController
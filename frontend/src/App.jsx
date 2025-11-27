
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Clients from './pages/Clients'
import Appointments from './pages/Appointments'
import CreateClient from './pages/Clients/create'
import UpdateClient from './pages/Clients/update'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login'
import { AuthProvider } from './auth/Context'
import PrivateRoute from './router/PrivateRoute'
import CreateAppointments from './pages/Appointments/create'
import UpdateAppointment from './pages/Appointments/update'

function App() {
  // pegar token 
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path='/clients' element={<Clients />} />
          <Route path='/appointments' element={<Appointments />} />
          <Route path='/create/appointment' element={<CreateAppointments />} />
          <Route path='/update/appointment' element={<UpdateAppointment />} />
          <Route path='/create/client' element={<CreateClient />} />
          <Route path='/update/client' element={<UpdateClient />} />
        </Route>

      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: '50%' }}
      />

      <Footer />
    </AuthProvider>
  )
}

export default App

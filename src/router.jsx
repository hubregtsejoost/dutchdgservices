import { createBrowserRouter } from 'react-router-dom'
import Verpakken from './routes/Verpakken.jsx'
import Opleiden from './routes/Opleiden.jsx'
import Consultancy from './routes/Consultancy.jsx'
import Droogijs from './routes/Droogijs.jsx'
import Contact from './routes/Contact.jsx'
import App from './App.jsx'

export const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/verpakken', element: <Verpakken />},
  {path: '/opleiden', element: <Opleiden />},
  {path: '/consultancy', element: <Consultancy />},
  {path: '/droogijs', element: <Droogijs />},
  {path: '/contact', element: <Contact />}
]);
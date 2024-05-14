import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <main>
      {}
      <Navbar />

      {/* This is where the 'elements' reference in the router in main.tsx will be rendered */}
      <Outlet />
    </main>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CadSkanowanie from './pages/CadSkanowanie'
import Druk3D from './pages/Druk3D'
import FrezowanieCNC from './pages/FrezowanieCNC'
import Grawerowanie from './pages/Grawerowanie'
import Kontakt from './pages/Kontakt'
import Realizacje from './pages/Realizacje'
import Layout from './components/Layout/Layout'



function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Layout />}>
    <Route path='/' element={<Home /> } />
    <Route path='/cad-skanowanie-3d' element={<CadSkanowanie /> } />
    <Route path='/druk-3d' element={<Druk3D /> } />
    <Route path='/frezowanie-cnc' element={<FrezowanieCNC /> } />
    <Route path='/grawerowanie-laserowe' element={<Grawerowanie /> } />
    <Route path='/realizacje' element={<Realizacje /> } />
    <Route path='/kontakt' element={<Kontakt /> } />

    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

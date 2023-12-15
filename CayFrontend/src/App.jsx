import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Registrar from './pages/Registrar'
import Actualizar from './pages/Actualizar'
import Eliminar from './pages/Eliminar'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registrar' element={<Registrar/>}/>
        <Route path='/update' element={<Actualizar/>}/>
        <Route path='/delete' element={<Eliminar/>}/>
      </Routes>
    </>
  )
}

export default App
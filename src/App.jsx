import { useState } from 'react'

//import './App.css'
//import { Header } from './components/Header'
import { NavBar } from './assets/pages/NavBar'
import { Routes, Route} from 'react-router-dom';
import { Contacto } from './assets/pages/Contacto'
import { Trabajos } from './assets/pages/Trabajos'
import { Sobre } from './assets/pages/Sobre'
import { Ini } from './assets/pages/Ini'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>

        
        <Routes>
          <Route exact path='/' element={<NavBar />} >
          <Route exact path='/' element={<Ini />} />
          <Route exact path='*' element={<Ini />} />

            <Route exact path='About' element={<Sobre />} />
            <Route exact path='Works' element={<Trabajos />} />
            <Route exact path='Contact' element={<Contacto />} />
          </Route>
        </Routes>
      </div>
  )
}

export default App

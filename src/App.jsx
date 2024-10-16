import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar } from './Components/Common/navbar'
import { DashboardCard } from './Components/Page/DashboardCard'
import { Incidents } from './Components/Page/Incidents'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<DashboardCard/>}/>
      <Route path='/Incidents' element={ <Incidents/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
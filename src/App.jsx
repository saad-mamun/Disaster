import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar } from './Components/Common/navbar'
import { DashboardCard } from './Components/Page/DashboardCard'
import { Incidents } from './Components/Page/Incidents'
import { Started } from './Components/Page/Started'
import { NewIncident } from './Components/Page/NewIncident'
import { IncidentDash } from './Components/Page/IncidentDash'
import { MapDisaster } from './Components/Page/MapDisaster'
import { Locations } from './Components/Page/Locations'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<DashboardCard/>}/>
      <Route path='/Incidents' element={ <Incidents/>}/>
      <Route path='/Started' element={ <Started/> }/>
      <Route path='/NewIncident' element={ <NewIncident/> }/>
      <Route path='/IncidentDash' element={ <IncidentDash/> }/>
      <Route path='/MapDisaster' element={ <MapDisaster/> } />
      <Route path='/Locations' element={ <Locations/> } />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
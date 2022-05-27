import { BrowserRouter,Routes,Route } from "react-router-dom"
import Order from './Components/Ticket'
import './css/App.css'
const App = () => {
  return (
    <BrowserRouter basename="pages/ticketing">
        <div className="main-container">
            <Routes>
                <Route path="/" element={<Order/>}/>
            </Routes>        
        </div>
    </BrowserRouter>

  )
}

export default App
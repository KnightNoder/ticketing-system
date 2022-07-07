import { BrowserRouter,Routes,Route } from "react-router-dom"
import CreateTicket from './Components/Ticket'
import NoTicket from './Components/NoTicket';
import ViewTickets from './Components/Tickets'
import TicketDetails from './Components/TicketDetails';
import './css/App.css'
const App = () => {
  return (
    <BrowserRouter basename="pages/ticketing">
        <div className="main-container">
            <Routes>
                <Route path="/create-ticket" element={<CreateTicket/>}/>
                <Route path="/view-tickets" element={<ViewTickets/>}/>
                <Route path="/no-tickets" element={<NoTicket/>}/>
                <Route path="/ticket" element={<TicketDetails/>}/>
                {/* <Route path="*" element={<CreateTicket/>}/> */}
            </Routes>        
        </div>
    </BrowserRouter>

  )
}

export default App
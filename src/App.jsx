import { BrowserRouter,Routes,Route } from "react-router-dom"
import CreateTicket from './Components/Ticket'
import NoTicket from './Components/NoTicket';
import ViewTickets from './Components/Tickets'
import TicketDetails from './Components/TicketDetails';
import './css/App.css'
const App = () => {
  const customer = document.getElementById('shopify-customer-id').value
  console.log(customer,'customer id');
  return (
    <BrowserRouter basename="pages/support-ticket">
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
import React from 'react';
import '../css/view-tickets.css';
import '../css/ticket.css';
import { useNavigate } from 'react-router-dom';
import {useEffect,useState} from 'react';
const axios = require('axios');


const Tickets = () => {

  const navigate = useNavigate();
  const [tickets_open,Set_tickets_open] = useState([]);
  const [tickets_closed,Set_tickets_closed] = useState([]);

  const changeDivColor = () => {
      alert('hello')
  }

  useEffect(() => {
    const ticketsList = async() => {
        const config = {
            method: 'post',
            url: 'http://staging-01.ap-south-1.elasticbeanstalk.com/api/supportTicket/getAllTickets',
            headers: {
                'Content-Type':'application/json'
            },
            data: {
                userId:'Lava'
            }
        }
        await axios(config).
        then((response)=>{
            console.log( (response.data.data),'resp data')
            const open_tickets_list = response.data.data.filter((x) =>{
                return x.status_open == true
            })
            Set_tickets_open(open_tickets_list)
            const closed_tickets_list  = response.data.data.filter((x) =>{
               return x.status_closed == true
            })
            Set_tickets_closed(closed_tickets_list)
        }).catch((error)=>{
            console.log(error,'err')
        })

    }
    ticketsList();
  },[])

  return (
      <>
        <div className='menu-container'>
        <div className='menu-header'>
            My Account 
        </div>
        <div className='menu-item'>
            <div className='icon-div'>
              <img className='icon-image' 
              src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/track-2.png?v=1654057892"
               alt="" srcset="" />
            </div>
            <div className='menu-item-text'>
                Track my order
            </div>
        </div>
        <div className='menu-item'>
            <div className='icon-div'>
              <img className='icon-image' 
              // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/no-ticket.png?v=1653997494"
              // src= "https://cdn.shopify.com/s/files/1/0607/6029/3588/files/cart.png?v=1654025032"
              // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/logout.png?v=1654025032"
              // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/track.png?v=1654025067"
              src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/cart.png?v=1654025032"
               alt="" srcset="" />
            </div>
            <div className='menu-item-text'>
                My orders
            </div>
        </div>
        <div className='menu-item'>
            <div className='icon-div'>
              <img className='icon-image' 
              // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/no-ticket.png?v=1653997494"
              // src= "https://cdn.shopify.com/s/files/1/0607/6029/3588/files/cart.png?v=1654025032"
              // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/logout.png?v=1654025032"
              // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/track.png?v=1654025067"
              src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/support.png?v=1654025032"
               alt="" srcset="" />
            </div>
            <div className='menu-item-text'>
                Support and help
            </div>
        </div>
        <div className='menu-item'>
            <div className='icon-div'>
              <img className='icon-image' 
              // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/no-ticket.png?v=1653997494"
              // src= "https://cdn.shopify.com/s/files/1/0607/6029/3588/files/cart.png?v=1654025032"
              // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/logout.png?v=1654025032"
              // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/track.png?v=1654025067"
              src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/referral.png?v=1654025032"
               alt="" srcset="" />
            </div>
            <div className='menu-item-text'>
                My Referrals
            </div>
        </div>
        <div className='menu-item' onClick={changeDivColor}>
            <div className='icon-div'>
              <img className='icon-image' 
              // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/no-ticket.png?v=1653997494"
              // src= "https://cdn.shopify.com/s/files/1/0607/6029/3588/files/cart.png?v=1654025032"
              // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/logout.png?v=1654025032"
              // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/track.png?v=1654025067"
              src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/referral.png?v=1654025032"
               alt="" srcset="" />
            </div>
            <div className='menu-item-text'>
                Logout
            </div>
        </div>
        </div>
        <div className='tickets-container'>
            <div className='heading'>
                My tickets
            </div>  
            <div className='ticket-list-container'>
                <div className='ticket-cards-container'>
                    <div className='tickets-heading'>
                        Active tickets
                    </div>
                    {/* <div className='ticket-card' onClick={() => navigate('/ticket')}>
                        <div className='ticket-header'>
                            <div className='issue'>
                                Ticket ID: #23345666
                            </div>
                            <div className='time'>
                                3 hours ago
                            </div>
                        </div>
                        <div className='header'>
                            No prescription to my order
                        </div>
                        <div className='description'>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry.Lorem Ipsum is simply dummy text 
                        </div>
                        <div className='ticket-status'>
                            <button className='ticket-status-button open-button'>
                                NEW
                            </button>
                        </div>
                    </div> */}
                    {/* <div className='ticket-card'>
                        <div className='ticket-header'>
                            <div className='issue'>
                                Ticket ID: #23345666
                            </div>
                            <div className='time'>
                                3 hours ago
                            </div>
                        </div>
                        <div className='header'>
                            No prescription to my order
                        </div>
                        <div className='description'>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry.Lorem Ipsum is simply dummy text 
                        </div>
                        <div className='ticket-status'>
                            <button className='ticket-status-button reopen-button'>
                                REOPENED
                            </button>
                        </div>
                    </div> */}
                    { tickets_open.map((x) => {
                        return (

                            <div className='ticket-card' key={x._id} onClick={() => navigate(`/ticket/${x._id}`)}>
                            <div className='ticket-header'>
                                <div className='issue'>
                                    Ticket ID: {x._id}
                                </div>
                                <div className='time'>
                                    3 hours ago
                                </div>
                            </div>
                            <div className='header'>
                                No prescription to my order
                            </div>
                            <div className='description'>
                                {x.description}
                            </div>
                            <div className='ticket-status'>
                                <button className='ticket-status-button reopen-button'>
                                    OPEN
                                </button>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className='ticket-list-container'>
                <div className='ticket-cards-container'>
                    <div className='tickets-heading'>
                        All tickets
                    </div>
                    {/* <div className='ticket-card'>
                        <div className='ticket-header'>
                            <div className='issue'>
                                Ticket ID: #23345666
                            </div>
                            <div className='time'>
                                3 hours ago
                            </div>
                        </div>
                        <div className='header'>
                            No prescription to my order
                        </div>
                        <div className='description'>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry.Lorem Ipsum is simply dummy text 
                        </div>
                        <div className='ticket-status'>
                            <button className='ticket-status-button close-button'>
                                CLOSE
                            </button>
                        </div>
                    </div>
                    <div className='ticket-card'>
                        <div className='ticket-header'>
                            <div className='issue'>
                                Ticket ID: #23345666
                            </div>
                            <div className='time'>
                                3 hours ago
                            </div>
                        </div>
                        <div className='header'>
                            No prescription to my order
                        </div>
                        <div className='description'>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry.Lorem Ipsum is simply dummy text 
                        </div>
                        <div className='ticket-status'>
                            <button className='ticket-status-button close-button'>
                                CLOSE
                            </button>
                        </div>
                    </div> */}
                    { tickets_closed.map((x) => {
                        return (

                            <div className='ticket-card' key={x._id} onClick={() => navigate(`/ticket/${x._id}`)}>
                            <div className='ticket-header'>
                                <div className='issue'>
                                    Ticket ID: {x._id}
                                </div>
                                <div className='time'>
                                    3 hours ago
                                </div>
                            </div>
                            <div className='header'>
                                No prescription to my order
                            </div>
                            <div className='description'>
                                {x.description}
                            </div>
                            <div className='ticket-status'>
                                <button className='ticket-status-button reopen-button'>
                                    CLOSED
                                </button>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
      </>
  )
}

export default Tickets
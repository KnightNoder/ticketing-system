import React from 'react';
import '../css/view-tickets.css';
import '../css/ticket.css';
import { useNavigate } from 'react-router-dom';

const Tickets = () => {

  const navigate = useNavigate();

  const changeDivColor = () => {
      alert('hello')
  }
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
                    <div className='ticket-card' onClick={() => navigate('/ticket')}>
                        <div className='ticket-header'>
                            <div className='issue'>
                                No prescription to my order
                            </div>
                            <div className='time'>
                                3 hours ago
                            </div>
                        </div>
                        <div className='description'>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry.Lorem Ipsum is simply dummy text 
                        </div>
                        <div className='ticket-status'>
                            <button className='ticket-status-button open-button'>
                                OPEN
                            </button>
                        </div>
                    </div>
                    <div className='ticket-card'>
                        <div className='ticket-header'>
                            <div className='issue'>
                                No prescription to my order
                            </div>
                            <div className='time'>
                                3 hours ago
                            </div>
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
                    </div>
                </div>
            </div>
            <div className='ticket-list-container'>
                <div className='ticket-cards-container'>
                    <div className='tickets-heading'>
                        All tickets
                    </div>
                    <div className='ticket-card'>
                        <div className='ticket-header'>
                            <div className='issue'>
                                No prescription to my order
                            </div>
                            <div className='time'>
                                3 hours ago
                            </div>
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
                                No prescription to my order
                            </div>
                            <div className='time'>
                                3 hours ago
                            </div>
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
                </div>
            </div>
        </div>
      </>
  )
}

export default Tickets
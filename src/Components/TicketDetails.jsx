import React from 'react';
import '../css/ticket-details.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Tickets = () => {
  const [reopen_ticket, Set_reopen_ticket] = useState(false);
  const [open_feedback,Set_open_feedback] = useState(false)
  const [thanks_feedback,Set_thanks_feedback] = useState(false);
  const [image_1,Set_image_1] = useState(true);
  const [image_2,Set_image_2] = useState(true);
  const [image_3,Set_image_3] = useState(false);

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
              src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/logout.png?v=1654025032"
               alt="" srcset="" />
            </div>
            <div className='menu-item-text'>
                Logout
            </div>
        </div>
      </div>
        <div className='tickets-container'>
            <div className='heading' onClick={() => navigate('/view-tickets')}>
               <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/back-icon.png?v=1654157038" alt="" srcset="" /> 
               <span className='back-button'>Back</span> 
            </div>  
            <div className='ticket-list-container'>
                <div className='ticket-cards-container'>
                    <div className='tickets-heading'>
                        Ticket ID: #23345666
                    </div>
                    <div className='status-section'>
                        <div className='status-header-part'>
                            <div className='ststus-heading'>
                                Created:
                            </div>
                            <div className='status-content'>
                                Mar 17, 2022
                            </div>
                        </div>
                        <div className='status-header-part'>
                            <div className='ststus-heading'>
                                Created:
                            </div>
                            <div className='status-content'>
                                Mar 17, 2022
                            </div>
                        </div>
                        <div className='status-header-part'>
                            <div className='ststus-heading'>
                                Created:
                            </div>
                            <div className='status-content'>
                                Mar 17, 2022
                            </div>
                        </div>
                        <div className='status-header-part'>
                            <div className='ststus-heading'>
                                Created:
                            </div>
                            <div className='status-content'>
                                Mar 17, 2022
                            </div>
                        </div>
                    </div>
                    <div className='ticket-card-detail'>
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
                    </div>
                </div>
                <div className='tickets-heading'>
                    Issue Type
                </div>
                <div className='tickets-heading'>
                    Support Response
                </div>
                <div className='support-response'>
                <div className='issue-description'>
                    <textarea className='input-description' type="text" 
                    placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry' />
                </div>
                </div>
                <div className='form-submit-section'>
                    <div className='no-content'>

                    </div>
                    <div className='feedback-buttons'>
                        <div className='reopen-link' onClick={() => Set_reopen_ticket(true)}>
                            Reopen Ticket
                        </div>
                        <div className='feedback-button-div'>
                            <button className='feedback-button' onClick={() => Set_open_feedback(true)}>
                                Feedback
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal center open={reopen_ticket} onClose={() => Set_reopen_ticket(false)} >
            <div className='reopen-popup'>
                    <div className='reopen-header'>
                        Please confirm
                    </div>
                    <div className='reopen-subtext'>
                        A support executive will be assigned to help you shortly.
                    </div>
                    <div className='reopen-button-div'>
                        <button className='popup-submit-button reopen'>
                            Reopen this ticket
                        </button>
                    </div>
            </div>
        </Modal>
        <Modal center open={open_feedback} onClose={() => Set_open_feedback(false)} >
            <div className='feedback-popup'>
                    {/* <div className='ticket-created-img'>
                        <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/ticket-created.png?v=1653659006" alt="" srcset="" />
                    </div> */}
                    <div className='feedback-header'>
                        We’d love to hear your feedback
                    </div>
                    <div className='feedback-subtext'>
                        How was your overall support experience
                    </div>
                    <div className='feedback-images'>
                        <div className='image-1'>
                            <img className='feedback-image-1' onClick={() => {
                                Set_image_1(!image_1); Set_image_2(true);Set_image_3(true)
                                }
                            } 
                            src={image_1 ? "https://cdn.shopify.com/s/files/1/0607/6029/3588/files/entypo_emoji-sad-1.png?v=1654170442" :
                            "https://cdn.shopify.com/s/files/1/0607/6029/3588/files/entypo_emoji-sad.png?v=1654170442" }/>
                            <div className='image-1-text'>
                                Bad
                            </div>
                        </div>
                        <div className='image-2'>
                            <img className='feedback-image-2' onClick={() => {
                                Set_image_2(!image_2);Set_image_1(true); Set_image_3(true)  
                              } 
                            } 
                             src={image_2 ? "https://cdn.shopify.com/s/files/1/0607/6029/3588/files/entypo_emoji-neutral-1.png?v=1654170442" :
                             "https://cdn.shopify.com/s/files/1/0607/6029/3588/files/entypo_emoji-neutral.png?v=1654170442" }/>
                            <div className='image-2-text'>
                                Ok
                            </div>
                        </div>
                        <div className='image-3'>
                            <img className='feedback-image-3' onClick={() => {
                                Set_image_3(!image_3); Set_image_1(true);Set_image_2(true)
                            } 
                            } 
                             src={image_3 ? "https://cdn.shopify.com/s/files/1/0607/6029/3588/files/entypo_emoji-happy-1.png?v=1654170442" :
                             "https://cdn.shopify.com/s/files/1/0607/6029/3588/files/entypo_emoji-happy.png?v=1654170442" }/>
                            <div className='image-3-text'>
                                Great
                            </div>
                        </div>
                    </div>
                    <div className='textarea-div'>
                        <textarea className='textarea-content' placeholder='Tell us more..'></textarea>
                    </div>
                    <div className='feedback-button-div' >
                        <button className='popup-submit-button' onClick={() => 
                         {
                            Set_open_feedback(false);
                         }    
                        } >
                            Submit
                        </button>
                    </div>
            </div>
        </Modal>
      </>
  )
}

export default Tickets
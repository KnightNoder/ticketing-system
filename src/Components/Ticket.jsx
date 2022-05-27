import React from 'react'
import '../css/ticket.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState } from 'react'

const Ticket = () => {
  const [issue,Set_issue] = useState('');
  const [sub_issue,Set_sub_issue] = useState('');
  const [modal_open,Set_modal_open] = useState(false)

  const handleIssueChange = (event) => {
    Set_issue(event.target.value);
  };

  const handleSubIssueChange = (event) => {
    Set_sub_issue(event.target.value);
  };

  return (
    <>
    <div className='menu-container'>
       My Account 
    </div>
    <div className='track-order-container'>
        <div className='heading-container'>
            <span className='header-img'> <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/ticket.png?v=1653641085" alt="" srcset="" /></span> 
            <span className='header'>  Raise a ticket </span>
        </div>
        <div className='ticket-header'>
            Issue Type
        </div>
        <div className='dropdown-flex'>
          <div className='issue'>
            <FormControl fullWidth > 
              {/* <InputLabel id="demo-simple-select-label">Select Issue type</InputLabel> */}
              <Select
                  // labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={issue}
                  onChange={handleIssueChange}
                  // label="Issue"
                  displayEmpty
                  sx={{
                    backgroundColor: "#F6F6F6"
                  }}
                  inputProps={
                    { 'aria-label': 'Without label',
                      color: "yellow" }
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{color:"#777777"}}>Select issue type</p>;
                    }
        
                    return selected;
                  }
                }
                >
                  <MenuItem value={"Orders Related"}>Orders Related</MenuItem>
                  <MenuItem value={"Products Queries"}>Products Queries</MenuItem>
                  <MenuItem value={"Returns & Refunds"}>Returns & Refunds</MenuItem>
                  <MenuItem value={"Consultation Help"}>Consultation Help</MenuItem>
                  <MenuItem value={"Delivery Help"}>Delivery Help</MenuItem>
                  <MenuItem value={"Others"}>Others</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </div>
          <div className='sub-issue'>
            <FormControl fullWidth >
              <Select
                  id="demo-simple-select"
                  value={sub_issue}
                  sx={{
                    backgroundColor: "#F6F6F6",
                    border: "none"
                  }}
                  onChange={handleSubIssueChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{color:"#777777"}}>Select Sub Issue type</p>;
                    }
        
                    return selected;
                  }}
                >
                  <MenuItem  value={"Orders Related"}>Orders Related</MenuItem>
                  <MenuItem value={"Products Queries"}>Products Queries</MenuItem>
                  <MenuItem value={"Returns & Refunds"}>Returns & Refunds</MenuItem>
                  <MenuItem value={"Consultation Help"}>Consultation Help</MenuItem>
                  <MenuItem value={"Delivery Help"}>Delivery Help</MenuItem>
                  <MenuItem value={"Others"}>Others</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
             </FormControl>
          </div>
        </div>
        <div className='issue-description'>
            <textarea rows="6" cols="79" className='input-description' type="text" placeholder='Please describe your issue' />
        </div>
        <div className='id-phone-container'>
            <div className='id-container'>
                <div className='id-header'>
                    Order ID
                </div>
                <div className='id-content'>
                  <input className='ticket-input' type="text" placeholder='Enter the order ID you need help with' />
                </div>
            </div>
            <div className='phone-container'>
                <div className='phone-header'>
                  Phone Number
                </div>
                <div className='id-content'>
                  <input className='ticket-input id-input' type="text" placeholder='Enter your phone number'/>
                </div>
            </div>
        </div>
        <div className='picture-upload-header'>
          Upload pictures of the product
        </div>
        <div className='upload-pictures'>
            <div className='image-1'>
                Pic1
            </div>
            <div className='image-2'>
                Pic2
            </div>
        </div>
        <div className='submit-button-div'>
            <button className='submit-button' onClick={() => Set_modal_open(true)}>
                Submit
            </button>
        </div>
    </div>
    <Modal center open={modal_open} onClose={() => Set_modal_open(false)}
  >
      <div className='popup'>
              <div className='ticket-created-img'>
                  <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/ticket-created.png?v=1653659006" alt="" srcset="" />
              </div>
              <div className='ticket-created-header'>
                Your ticket has been created
              </div>
              <div className='ticket-created-subtext'>
                A support executive will be assigned to help you shortly.
              </div>
              <div className='ticket-created-button-div'>
                  <button className='popup-submit-button'>
                    View my tickets
                  </button>
              </div>
      </div>
    </Modal>
    </>
  )
}

export default Ticket
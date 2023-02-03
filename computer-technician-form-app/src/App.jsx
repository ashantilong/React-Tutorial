import './App.css';
import React from 'react';
import { Component } from 'react';
import Information from './components/customerInformation'
import PC from './components/pcInformation'
import Billing from './components/billingPurpose'
import Problem from './components/issueBox'
import Mentions from './components/thingsToMentionList'
import Form from './pages/Form'



class App extends Component{
  render() {
  return (
    <div>
      <div className="form-container">
        {/* This is the header that display company information and prior insturctions*/}
        <div className="header-container">
          <Form/>
        {/* End of header */}

        </div>
        {/* Using componwnt Customer information */}
        <h1>Customer Information:</h1>
        <div className='customer-info'><Information/></div>

        {/* Start of PC information component */}
        <h1 className="pc-information">INFORMATION ABOUT YOUR PC:</h1>
        <div className='pc-billing-container'>
         <div><PC/></div>
         <div className='billing'> <Billing/></div>
        </div>
        {/* Start of telling us what wrong with your system */}
        <h1 className='problem'>TELL US WHAT'S WRONG WITH YOUR COMPUTER:</h1>
        <div className=' problem-mention-container'>
        <div><Problem/></div>
        <div className=' mention'>
        <Mentions/>
          </div>
        </div>


      </div>
    
    </div>
  );
  }
}
export default App;

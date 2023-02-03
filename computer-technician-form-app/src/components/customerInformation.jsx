import React, {Component} from 'react';
import {TextField} from '@mui/material';

const styles = {

    TextField: {
       // position: 'relative',
        left: '100px',
        //width: '450px',
        height: '150px'
    },
    address: {
        position: 'relative',
        left: '60px',
        bottom: '101px'
    },
    addressText: {
       // position: 'relative',
        left: '25px',
        width: '450px'
    },
    city: {
        position: 'relative',
        left: '60px',
        bottom: '93px'

    },
    cityText: {
        //position: 'relative',
        left: '55px',
        width: '150px'
    },
    state: {
        position: 'relative',
        left: '70px',
    },
    stateText: {
       // position: 'relative',
        left: '85px',
        width: '50px',


    },
    zipCode: {
        position: 'relative',
        left: '100px',

    },
    zipCodeText: {
       // position: 'relative',
        left: '110px',
        width: '100px',

    },
    infoContainer: {
        //display: 'flex',
    },
    rightInfoContainer: {
        alignCenter: 'center',

    },
    phoneNumber: {
        //position: 'relative',
        left: '110px',
    },
    phoneNumberText: {
       // position: 'relative',
        left: '120px',
        width: '170px',
    },
    email: {
        position: 'relative',
        left: '40px',
    },
    emailText: {
        //position: 'relative',
        left: '55px',
        width: '170px',
    }

}

class Information extends Component {
    render() {
        return (
            <div className="info-container">
                <div className="left-info-container">
                    <div>
                        <TextField label="Name" size="small" 
                            sx={{width:'170px'}}
                            style={
                                styles.TextField
                            }
                           />
                        <TextField label="Phone Number" size="small" className="phone-number" style={styles.phoneNumberText}/>
                        <TextField label="Email" size="small" className="email-input" style={styles.emailText}/>
                    </div>
                    <div className='address'
                        style={
                            styles.address
                    }>
                        <TextField label="Address" size="small" className="address-input"
                            style={
                                styles.addressText
                            }/>
                       
                    </div>
                    <div className='city' style={styles.city}>
                        <TextField label="City" size="small" className="city-input" style={styles.cityText}/>
                        <TextField label="State" size="small" className="state-input" style={styles.stateText}/>
                        <TextField label="Zip Code" size="small" className="zip-input" style={styles.zipCodeText}/>
                    </div>

                </div>
                <div className="right-info-container" style={styles.rightInfoContainer}></div>


            </div>

        )

    }
}
export default Information;

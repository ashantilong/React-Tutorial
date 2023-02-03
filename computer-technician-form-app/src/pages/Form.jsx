import React from 'react';

const styles = {
    infoContainer: {
        display: 'flex',
    },
    formContainer: {
        width: '850px',
        height: '900px',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '2px solid black',
    },
    h1: {
        color: 'black',
        font: '1em sans-serif',
        marginLeft: '60px',
    },
    headerContainer: {
        display: 'flex',
        padding: '0px',
    }
}

const Form = () => {

    return (
        <div className={styles.formContainer}>
            <h1>Computer Repair Request Form</h1>
            {/* This is the header that display company information and prior insturctions*/}
            <div className={styles.headerContainer}>
                <div className="company-information">
                    <p> Slaughter Game Tech LLC</p>
                    <p> 28 unknown drive LW</p>
                    <p> Atlanta Georgia 303018</p>
                    <p> Phone: ???-???-????</p>
                    <p> Monday-Friday (7am-12pm)</p>
                </div>
                <div className="prior-instruction">
                    <p className='underline'>PLEASE READ BEFORE TURNING IN SYSTEM.</p>
                    <p>Make sure you give us any CDs or cables that came </p>
                    <p> with the system at the time of turn in. These items</p>
                    <p>may result in the delay of your repair . Imagine</p>
                    <p>taking your care for service and not leaving the keys.</p>
                    <p>Same thing!</p>
                </div>
            </div>
        </div>
    )
}

export default Form;
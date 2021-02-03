import React from 'react'
import Modal from 'react-modal'
//can convert every return function like this
const Pop=(props)=>(// this is implicitly returning function....do check it
    <Modal 
        isOpen={!!props.selectedOption}//true is some value false if undefined or nothing
        contentLabel="seclected Options"
        onRequestClose={props.close}//whenever clicked in background it disappears
        ariaHideApp={false}//remove warning..since it is not defined will giev warning
    >

        <h1>HI</h1>
        <button onClick={props.close}>Close</button>

    </Modal>
);

export default Pop;
import React from 'react'
import "./Display_Data.css"
import { Form } from './Form';
import { Modal } from '@mui/material';

export const Display_Data = ({ title, fees, duration, id, ondelete }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div id='box'>
                <h3>{title}</h3>
                <p>Fees: {fees}</p>
                <p>Duration: {duration} months</p>
                <p>ID: {id}</p>
                <button onClick={() => ondelete(id)}>Delete</button>&nbsp;&nbsp;&nbsp;
                <button onClick={handleOpen}>Update</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Form intialData={{ title, fees, duration, id }} />
                </Modal>
            </div>
        </>
    );
};
import React, { useState } from 'react';
import './Modal.scss';
import Popup from 'reactjs-popup';
import { MODAL_HELPER_TEXT,
         GITHUB,
         GITHUB_LINK } from 'constants/constants';

const GITHUB_IMG = 'footer/github.png';
const POPUP_STOR = 'popup_accessed';
const MILISECONDS_DIVISOR = 1000*60*60*24;

function shouldResetStorage(curr_date, stor_date){
    if(!curr_date || !stor_date){ return; }
    if(!(curr_date instanceof Date)){
        curr_date = new Date(curr_date);
    }
    if(!(stor_date instanceof Date)){
        stor_date = new Date(stor_date);
    }
    const daysCalc = (curr_date - stor_date) / MILISECONDS_DIVISOR;
    if(daysCalc > 30){
        localStorage.removeItem(POPUP_STOR);
    }
}

export function Modal(){
    shouldResetStorage(new Date(), localStorage.getItem(POPUP_STOR));
    const initialState = localStorage.getItem(POPUP_STOR) ? false : true;
    const [open, setOpen] = useState(initialState);

    function closeDialog(){
        localStorage.setItem(POPUP_STOR, (new Date()));
        setOpen(false);
    }

    return (
        <Popup open={open} closeOnDocumentClick={false}>
            <span className='modal-content-span'>
                {MODAL_HELPER_TEXT}<br></br>
                <span role='img' aria-label='pointing down'>👇</span>
            </span>
            <a href={GITHUB_LINK}
               target='blank' rel='noopener noreferrer'>
                   <img src={GITHUB_IMG} alt={GITHUB} title={GITHUB} />
            </a>
            <a className='modal-close' onClick={closeDialog}>
                &times;
            </a>
        </Popup>
    );
}

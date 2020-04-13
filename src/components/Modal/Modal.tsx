import React, { useState } from 'react';
import './Modal.scss';
import  Popup from 'reactjs-popup';
import { MODAL_HELPER_TEXT,
         GITHUB,
         GITHUB_LINK } from 'constants/constants';

const GITHUB_IMG: string = 'footer/github.png';
const POPUP_STOR: string = 'popup_accessed';
const MILISECONDS_DIVISOR: number = 1000*60*60*24;

function shouldResetStorage(curr_date: Date, stor_date: Date){
    const daysCalc: number = ((Number(curr_date) - Number(stor_date)) / MILISECONDS_DIVISOR);
    if(daysCalc > 30){
        localStorage.removeItem(POPUP_STOR);
    }
}

export function Modal(){
    const localStorageGetDate: string | null = localStorage.getItem(POPUP_STOR);
    const storDate: Date = localStorageGetDate ? new Date(localStorageGetDate) : new Date();
    shouldResetStorage(new Date(), storDate);
    const initialState: boolean = !localStorage.getItem(POPUP_STOR);
    const [open, setOpen] = useState<boolean>(initialState);

    function closeDialog(){
        localStorage.setItem(POPUP_STOR, (new Date()).toString());
        setOpen(false);
    }

    return (
        <Popup open={open} closeOnDocumentClick={false}>
            <>
                <span className='modal-content-span'>
                    {MODAL_HELPER_TEXT}<br></br>
                    <span role='img' aria-label='pointing down'>👇</span>
                </span>
                {/* eslint-disable-next-line */}
                <a href={GITHUB_LINK}
                   target='blank' rel='noopener noreferrer'>
                    <img src={GITHUB_IMG} alt={GITHUB} title={GITHUB} />
                </a>
                {/* eslint-disable-next-line */}
                <a className='modal-close' onClick={closeDialog}>
                    &times;
                </a>
            </>
        </Popup>
    );
}

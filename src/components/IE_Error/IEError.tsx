import React from 'react';
import './IEError.scss';
import { IE_ERROR_MSG, IE_HELP_LINK } from 'constants/constants';

export function IEError(): JSX.Element{
  return (
    <div className='ie-error'>
        <h1>{IE_ERROR_MSG}</h1>
        <a href='https://www.whatismybrowser.com/guides/how-to-try-a-different-web-browser'
            target='blank' rel='noopener noreferrer'>
            {IE_HELP_LINK}
        </a>
    </div>
    );
}

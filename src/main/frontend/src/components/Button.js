import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

export const Button = () => {
    return (
        <Link to='login'>
            <button className='btn'>
                로그인
            </button>
        </Link>
    );
}

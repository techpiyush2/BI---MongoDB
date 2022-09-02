import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Link from './Project';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter>
     <Link/>
    </BrowserRouter>
    </>
);


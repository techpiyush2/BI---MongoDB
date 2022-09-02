import React from 'react'
import './List.css';
import { Link } from 'react-router-dom';

function List() {
    return (
        <>
            <div className='navbar'>
                
                <p className='logo'>React Js Project</p>
                <div className='list'>
                <ul >
                    <li> <Link to='/project1'>Project 1</Link></li>
                    <li> <Link to='/project2'>Project 2</Link></li>
                    <li> <Link to='/project3'>Project 3</Link></li>
                </ul>
                </div>
            </div>
        </>
    )
}

export default List
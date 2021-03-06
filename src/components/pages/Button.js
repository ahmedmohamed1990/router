import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
    return <NavLink className='btn btn-success text-black' to={`/profile/${props.id}`}>{props.children}</NavLink>
}

export default Button;
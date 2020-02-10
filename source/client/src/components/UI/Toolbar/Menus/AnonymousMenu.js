import React from 'react'
import {NavLink as RouterNavLink} from 'react-router-dom';
import {
    NavItem,
    NavLink
} from 'reactstrap';


const AnonymousMenu = () => {
    return (
    <>    
    <NavItem>
        <NavLink tag={RouterNavLink} to="/login">Войти</NavLink>
    </NavItem>
    <NavItem>
        <NavLink tag={RouterNavLink} to="/register" exact>Регистрация</NavLink>
    </NavItem>
    </>
    )
}

export default AnonymousMenu;
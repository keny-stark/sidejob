import React, {useState} from 'react'
import AnonymousMenu from './Menus/AnonymousMenu';
import UserMenu from './Menus/UserMenu';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
  } from 'reactstrap';

export const Toolbar = ({user}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">Side Job</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar style={{alignItems: 'baseline'}}>

          {user ? <UserMenu user={user}/>: <AnonymousMenu/>}

          </Nav>
        </Collapse>
      </Navbar>
    )
}


import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));
const UserMenu = ({user, logout}) => {
    // const classes = useStyles();
    
    return (

        <UncontrolledDropdown nav inNavbar>

        <DropdownToggle nav caret>
        {/* <Avatar alt="Remy Sharp" src="https://sun9-17.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1" /> */}

          {user.username}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            Option 1
          </DropdownItem>
          <DropdownItem>
            Option 2
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => logout(user)}>
            logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
}


export default UserMenu;

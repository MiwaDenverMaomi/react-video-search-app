// import { useState } from 'react';
import NavListItem from './NavListItem';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const NavList = ({ isLogin }) => {
  // const [city, setCity] = useState('');

  // const onClick = (e) => {
  //   console.log('Form:onClick');
  //   e.preventDefault();
  //   onClickSubmit(city);
  // };

  const menus = isLogin ?
    [
      {
        path: './playlist',
        menu: 'Play Lssist'
      },
      {
        path: './logout',
        menu: 'Logout'
      },
      {
        path: './reset_pass',
        menu: 'Reset Password'
      },
      {
        path: './cancel',
        menu: 'Cancel'
      }
    ] :
    [{
      path: './login',
      menu: 'Login'
    }];

  const navMenu = menus.map((menu) => {
    return
    <Route path={menu.path} component={NavListItem} render={() => <NavListItem path={menu.path} menu={menu.menu} />} />
  });

  return (
    <ul className="nav">
      <BrowserRouter>
        {navMenu}
      </BrowserRouter>
    </ul>
  );
};

export default NavList;

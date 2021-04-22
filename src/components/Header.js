import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { logout } from '../redux/action/authAction';
import { GLOBALTYPES } from '../redux/action/globalTypes';
import Avatar from './Avatar';
const Header = () => {
    const navLinks = [
        {label: 'Home', icon: 'home', path: '/'},
        {label: 'Message', icon: 'near_me', path: '/message'},
        {label: 'Discover', icon: 'explore', path: '/discover'},
        {label: 'Notify', icon: 'favorite', path: '/notify'},
      ];
      const {auth, theme} = useSelector((state) => state);
      const dispatch = useDispatch();
      const {pathname} = useLocation();
      const isActive = (pn) => {
        if (pn === pathname) return 'active';
      };
    return (
        <div className="header bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
      <Link to="/" className="logo">
        <h1 className="navbar-brand text-uppercase">Insta</h1>
      </Link>
      <div className="menu" id="navbarSupportedContent">

      <ul className="navbar-nav flex-row">
        {navLinks.map((link, index) => (
          <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
            <Link className="nav-link" to={link.path}>
              <span className="material-icons">{link.icon}</span>
            </Link>
          </li>
        ))}
        <li className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
          <Avatar src={auth.user.avatar} size="medium-avatar"  />
          </span>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>
              Profile
            </Link>
            <label
              onClick={() =>
                dispatch({type: GLOBALTYPES.THEME, payload: !theme})
              }
              className="dropdown-item"
              htmlFor="theme"
            >
              {theme ? 'Dark Mode' : 'Light Mode'}
            </label>
            {/* <Link  to="/"> */}

            {/* </Link> */}
            <div className="dropdown-divider"></div>
            <Link
              onClick={() => dispatch(logout())}
              className="dropdown-item"
              to="/"
            >
              Log out
            </Link>
          </div>
        </li>
      </ul>
    </div>
 

    </nav>
 </div>
    )
}

export default Header

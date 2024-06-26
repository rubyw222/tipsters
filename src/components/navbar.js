import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
          <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/account">Account</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
          </ul>
    </nav>
  );
};

export default NavBar;
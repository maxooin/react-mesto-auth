import logo from "../image/logo/logo.svg";
import {Link, useLocation} from "react-router-dom";

function Header(props) {
  const location = useLocation();
  const link = `${location.pathname === '/singin' ? '/singup' : '/singin'}`;
  const title = `${location.pathname === '/singin' ? 'Регистрация' : 'Войти'}`;

  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo"/>
      {!props.loggedIn  && (
        <Link className="header__link" to={link}>
          {title}
        </Link>
      )}
      {props.loggedIn && (
        <nav className="header__nav">
          <span className="header__email">{props.email}</span>
          <button className="header__button" onClick={props.onLogOut}>Выйти</button>
        </nav>
      )}

    </header>
  )
}

export default Header;

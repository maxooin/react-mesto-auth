import {useState} from "react";
import {Link} from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handelePwdChange(evt) {
    setPwd(evt.target.value);
  }

  return (
    <section className="singup">
      <form className="singup__form">
        <h2 className="singup__title">Регистрация</h2>
        <input className="singup__input"
               name="email"
               type="email"
               value={email || ''}
               minLength={2}
               maxLength={50}
               onChange={handleEmailChange}
               placeholder="Email"
               required/>
        <input className="singup__input"
               name="pwd"
               type="password"
               value={pwd || ''}
               minLength={6}
               maxLength={20}
               onChange={handelePwdChange}
               placeholder="Пароль"
               required/>
        <button className="singup__button">Зарегистрироваться</button>
        <p className="singup__text">Уже зарегистрированы?
          <Link className="singup__link" to="/login"> Войти</Link>
        </p>
      </form>
    </section>
  )
}

export default Register;

import {useState} from "react";

function Login(props) {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handelePwdChange(evt) {
    setPwd(evt.target.value);
  }

  function handleLogIn(evt) {
    evt.preventDefault()
    props.onLogin(email, pwd)
  }

  return (
    <section className="login">
      <form className="login__form"
            onSubmit={handleLogIn}>
        <h2 className="login__title">Вход</h2>
        <input className="login__input"
               name="email"
               type="email"
               value={email || ''}
               minLength={2}
               maxLength={50}
               onChange={handleEmailChange}
               placeholder="Email"
               required/>
        <input className="login__input"
               name="pwd"
               type="password"
               value={pwd || ''}
               minLength={6}
               maxLength={20}
               onChange={handelePwdChange}
               placeholder="Пароль"
               required/>
        <button className="login__button">Войти</button>
      </form>
    </section>
  )
}

export default Login;

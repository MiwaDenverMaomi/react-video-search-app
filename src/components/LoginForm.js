import { useState } from 'react';

const LoginForm = ({ onClickSubmitForm, errEmailMsg, errPassMsg }) => {
  const [userInfo, setUserInfo] = useState([]);
  const [errMsg, setErrMsg] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickSubmit = (e) => {
    e.preventDefault();
    onClickSubmitForm('/users/post_login', 'post', { email, password }, '/home');
  };
  return (
    <div>
      <h2 className="common__menu-title">Login</h2>
      <form className="form" method="post">
        <div>
          <label htmlFor="email" className="form__label">Email</label>
          <div className="common__err">{errEmailMsg}</div>
          <input type="text" name="email" placeholder="email" className="form__inputarea"
            onChange={e => { setEmail(e.target.value) }} />
          <label htmlFor="password" className="form__label">Password</label>
          <div className="common__err">{errPassMsg}</div>
          <input type="text" name="password" className="form__inputarea" placeholder="password"
            onChange={e => { setPassword(e.target.value) }} />
        </div>
        <div className="common__notice--under">Forgot password?</div>
        <button
          type="submit"
          className="common__btn--l"
          onClick={onClickSubmit}
        >Submit</button>
        <div className="common__err"></div>
      </form>
    </div>
  );
};

export default LoginForm;

import { useState } from 'react';
const SignUpForm = ({ onClickSubmitForm, errEmailMsg, errPassMsg, errRePassMsg }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onClickSubmit = (e) => {
    e.preventDefault();
    onClickSubmitForm('/users/post_signup', 'post', { email, password, rePassword }, '/home');
  };

  return (
    <form className="form">
      <h2 className="common__menu-title">Sign UP</h2>
      <div>
        <label htmlFor="email" className="form__label">Email</label>
        <div className="common__err">{errEmailMsg}</div>
        <input type="text" name="email" placeholder="email" className="form__inputarea" onChange={e => { setEmail(e.target.value) }} />
        <label htmlFor="password" className="form__label">Password</label>
        <div className="common__err">{errPassMsg}</div>
        <input type="text" name="password" placeholder="password" onChange={e => { setPassword(e.target.value) }} className="form__inputarea" />
        <label htmlFor="re_password" className="form__label">Password(re-enter)</label>
        <div className="common__err">{errRePassMsg}</div>
        <input type="text" name="re_password" className="form__inputarea" placeholder="Re-enter password" onChange={e => { setRePassword(e.target.value) }} />
      </div>
      <button
        type="submit"
        className="common__btn--l"
        onClick={onClickSubmit}>Submit</button>
      <div className="common__err"></div>
    </form>
  );
};

export default SignUpForm;

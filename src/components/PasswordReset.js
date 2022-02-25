import { useState } from 'react';

const PasswordReset = ({ errPassMsg, errRePassMsg, onClickSubmitForm }) => {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onClickSubmit = (e) => {
    e.preventDefault();
    onClickSubmitForm('/users/post_password_reset', 'post', { password, rePassword }, '/home');
  };

  return (
    <div>
      <h2 className="common__menu-title">Password Reset</h2>
      <form className="form">
        <div>
          <label htmlFor="password" className="form__label">Password</label>
          <div className="common__err">{errPassMsg}</div>
          <input type="text" name="password" placeholder="password" className="form__inputarea"
            onChange={e => { setPassword(e.target.value) }} />
          <label htmlFor="re_password" className="form__label">Password(re-enter)</label>
          <div className="common__err">{errRePassMsg}</div>
          <input type="text" name="re_password" className="form__inputarea" placeholder="Re-enter password"
            onChange={e => { setRePassword(e.target.value) }} />
        </div>
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

export default PasswordReset;

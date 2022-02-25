import messages from './../consts/messages';

const regexEmail = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
const regexAlphaNum = /^[A-Za-z0-9]+$/;//<-$important, return!!

export const emailValid = (email) => {
  if (email.length === 0 || email.length > 50 || email.length < 8) {
    console.log('email.lengtherr');
    setErrEmailMsg(messages.strNumErr);
  } else {
    console.log('emaillengthOK');
    if (regexEmail.test(email) === true) {
      console.log('emailOK');
    } else {
      console.log('email.regexerr');
      setErrEmailMsg(messages.emailValidErr);
    }
  }
};

export const passwordValid = (password) => {
  if (password.length === 0 || password.length > 50 || password.length < 8) {
    console.log('pass.lengtherr');
    return messages.strNumErr;
  } else {
    console.log('passlengthOK');

    if (regexAlphaNum.test(password) === true) {
      console.log('passOK ');
      return '';
    } else {
      console.log('pass.regexerr');
      return messages.alphaNumErr;
    }
  }
};

export const passConfirm = (password, re_password) => {
  if (password !== re_password) {
    return messages.re_pass_NG;
  } else {
    return '';
  }
};

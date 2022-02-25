const Header = ({ onClickChange }) => {
  return (
    <div className="header">
      <div className="header__logo">Video Play List</div>
      <button className="header__btn" onClick={onClickChange}>Wall Paper</button>
    </div >
  );
};

export default Header;

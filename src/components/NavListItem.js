const NavListItem = ({ isLogin, menu, path }) => {
  // const [city, setCity] = useState('');

  // const onClick = (e) => {
  //   console.log('Form:onClick');
  //   e.preventDefault();
  //   onClickSubmit(city);
  // };

  return (
    <a href={path} > <li className="nav__item" >{menu}</li></a>
  );
};

export default NavListItem;

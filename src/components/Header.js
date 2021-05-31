import PropTypes from "prop-types";
import Button from "./Button";
import {useLocation} from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()

  return (
    <header className="header">
      <p>header</p>
      <p>{title}</p>
      {location.pathname === '/' && <Button color={showAdd ? "red" :"green"} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}></Button>}
    </header>
  );
};

Header.defaultProps = {
  title: "default header prop",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

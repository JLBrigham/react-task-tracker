import PropTypes from "prop-types";
import Button from "./Button";

function Header(props) {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button
        color={props.showAdd ? "red" : "green"}
        text={props.showAdd ? "Close" : "Add"}
        onClick={props.onAdd}
      />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

// CSS styling in JS

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header;

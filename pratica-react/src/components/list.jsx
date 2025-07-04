import { useContext } from "react";
import ThemeContext from "../context/theme.js";

const List = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <ul className={`theme-${theme}`}>
      {
        props.items.map((v, index) => {
          return <li>{v}</li>;
        })
      }
    </ul>
  );
};

export default List;

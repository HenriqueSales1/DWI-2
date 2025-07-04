import { useContext } from "react";
import ThemeContext from "../context/theme.js";

const List = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`theme-${theme}`}>
      <ul>
        {
          props.items.map((v, index) => {
            return <li>{v}</li>;
          })
        }
      </ul>
    </div>

  );
};

export default List;

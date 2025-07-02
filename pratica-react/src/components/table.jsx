import {useContext} from "react";
import ThemeContext from "../context/theme.js";

const Table = ({ titles, data }) => {
  const theme = useContext(ThemeContext);
  return (
    <table className={`theme-${theme}`}>
      <thead>
        <tr>
          {
            titles.map(
              (v, index) => {
                return <th>{v}</th>;
              }
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map(
            (obj, index) => {
              return (
                <tr>
                  <td>{obj.id}</td>
                  <td>{obj.name}</td>
                  <td>{obj.age}</td>
                </tr>
              );
            }
          )
        }
      </tbody>
    </table>
  );
};

export default Table;
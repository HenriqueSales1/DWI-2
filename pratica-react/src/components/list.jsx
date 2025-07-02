const List = (props) => {
  return (
    <ul>
      {
        props.items.map((v, index) => {
          return <li>{v}</li>;
        })
      }
    </ul>
  );
};

export default List;

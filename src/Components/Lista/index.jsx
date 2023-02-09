const List = ({ list, removeItem }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item}>
          {item} <button onClick={() => removeItem(item)}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

export default List;

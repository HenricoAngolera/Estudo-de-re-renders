import { memo, useCallback, useState } from "react";

const ItemList = memo(({ items }) => {
  console.log("Renderizou ItemList");
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

const Counter = ({ count }) => {
  console.log("Renderizou Counter");
  return <h1>Contagem: {count}</h1>;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [])

  return (
    <div>
      <Counter count={count} />
      <button onClick={increment}>Incrementar</button>
      <ItemList items={items} />
    </div>
  );
};

export default App;
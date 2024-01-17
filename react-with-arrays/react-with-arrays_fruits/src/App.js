import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: "0001",
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: "0002",
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: "0003",
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: "0004",
      name: "🍒 Cherry",
      color: "red",
    },
    {
      id: "0005",
      name: "🫐 Blueberry",
      color: "blue",
    },
  ];

  return (
    <div className="app">
      {fruits &&
        fruits.map((fruit) => <Card name={fruit.name} key={fruit.id} />)}
    </div>
  );
}

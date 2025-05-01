import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";
// import './App.css'
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/products").then((res) =>
      res.json().then((data) => setProducts(data))
    );
  }, []);
  return (
    <>
      <h1>React App</h1>
      <div>
        {products && products.map(value=>(
          <li key={value._id}>{value._id}-{value.name}-{value.price}</li>
        ))}
      </div>
    </>
  );
}
export default App;

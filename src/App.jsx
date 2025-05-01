import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";
import axios from "axios";
// import './App.css'
function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8081/products").then((res) =>
      res.json().then((data) => setProducts(data))
    );
  }, [flag]);

  const addProduct = async () => {
    axios.post("http://localhost:8081/products", product);
    console.log(flag);
    setFlag(!flag);
  };

  const deleteProduct = async (id) => {
    axios.delete("http://localhost:8081/products/" + id);
    setFlag(!flag);
  };
  return (
    <>
      <h1>React App</h1>
      <div>
        <input
          placeholder="Product Name"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        ></input>
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        ></input>
        <button onClick={addProduct}>Add</button>
      </div>
      <div>
        {products &&
          products.map((value) => (
            <li key={value._id}>
              {value._id}-{value.name}-{value.price}-
              <button onClick={() => deleteProduct(value._id)}>Delete</button>
            </li>
          ))}
      </div>
    </>
  );
}
export default App;

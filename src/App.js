import "./App.css";
import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [product] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0, discount: 0 },
    { id: 2, name: "PlayStation 5", price: 12000.0, discount: 0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72, discount: 0 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0, discount: 0 },
    {
      id: 5,
      name: "Tablet Samsung Galaxy Tab S7",
      price: 4844.05,
      discount: 0,
    },
    {
      id: 6,
      name: "Cadeira Gamer Cruiser Preta FORTREK",
      price: 1215.16,
      discount: 0,
    },
  ]);

  const [filteredProduct, setFilteredProduct] = useState([{ price: 0 }]);
  const [newProduct, setNewProduct] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [hasButton, setHasButton] = useState(false);

  const randomProduct = () => {
    const id = Math.floor(Math.random() * 6 + 1);
    const filtered = product.filter((item) => item.id === id);
    setFilteredProduct(filtered);
    const discount = Math.floor(Math.random() * (90 - 40)) + 40;
    if (filteredProduct[0].price > 0) {
      setNewProduct([
        {
          ...filteredProduct[0],
          discount: discount,
          totalDiscount: Number((filteredProduct[0].price * discount) / 100),
        },
      ]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={randomProduct}>Gerar Promoção</button>
        <ProductList
          newProduct={newProduct}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          hasButton={hasButton}
          setHasButton={setHasButton}
        />
        <Cart currentSale={currentSale}></Cart>
      </header>
    </div>
  );
}

export default App;

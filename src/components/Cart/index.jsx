import Product from "../Product";

const Cart = ({ currentSale }) => {
  return (
    <div className="Cart">
      {currentSale.map((item) => (
        <Product item={item}></Product>
      ))}
    </div>
  );
};

export default Cart;

import Product from "../Product";

const Cart = ({ currentSale }) => {
  const total = currentSale.reduce((acc, item) => {
    return acc + (item.price - item.totalDiscount);
  }, 0);

  return (
    <>
      <div className="Cart">
        {currentSale.map((item) => (
          <Product item={item}></Product>
        ))}
      </div>
      <span>Total da compra: R$ {total.toFixed(2)}</span>
    </>
  );
};

export default Cart;

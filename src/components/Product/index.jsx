const Product = ({
  addProduct,
  item: { name, price, discount, totalDiscount, id },
  hasButton,
}) => {
  return (
    <div className="CardProduto">
      <p>{name}</p>
      <p>R$ {price.toFixed(2)}</p>
      <p>Desconto : %{discount}</p>
      <p> Valor do desconto: R$ {totalDiscount.toFixed(2)}</p>
      {hasButton ? (
        <button onClick={() => addProduct(id)}>Add to Cart</button>
      ) : (
        <p>Total: R$: {(price - totalDiscount).toFixed(2)}</p>
      )}
    </div>
  );
};

export default Product;

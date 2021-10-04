import Product from "../Product";

const ProductList = ({
  newProduct,
  setCurrentSale,
  currentSale,
  hasButton,
  setHasButton,
}) => {
  const addProduct = (id) => {
    const produto = newProduct.find((item) => item.id === id);
    setCurrentSale([...currentSale, produto]);
    console.log(currentSale);
  };

  return (
    <div>
      <p>Produto escolhido</p>
      {newProduct[0] &&
        newProduct.map((item) => (
          <Product
            item={item}
            addProduct={addProduct}
            hasButton={true}
          ></Product>
        ))}
    </div>
  );
};

export default ProductList;

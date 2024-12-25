import React, { useState } from "react";
import ProductItem from "./ProductItem";
import useFetch from "../hooks/useFetch";

const ProductList = () => {
  const { products, error } = useFetch();
  const [search, setSearch] = useState("");
  // console.log(products);

  const filteredProducts = products.filter(
    (product) =>
      product.title &&
      product.title.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(filteredProducts);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;

import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .catch((err) => setError(err.message));
  }, []);
  //   returning products and error message after fetching
  return { products, error };
};

export default useFetch;

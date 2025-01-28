import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((err) => setError(err.message));
  }, [products]);

  return { products, error };
};

export default useFetch;

import { useEffect, useState, memo } from "react";
import ProductCard from "../ProductCard";


import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";


function Products() {
  
  console.log("Products");
  let [isLoading, setIsLoading] = useState(true);
  let [products, setProducts] = useState([]);

  // let a =  useState(true);
  // let isLoading = a[0];
  // let setIsLoading = a[1];
  useEffect(function () {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
        // isLoading = false;
        // rerender()
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <div> Loading </div>;
  } else {
    return (
      <div>
        <Link to="/cart"> Cart</Link>
        <Categories />
        {products.map(function (product) {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default memo(Products);


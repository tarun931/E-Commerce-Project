import CurrencyFormator from "../CurrencyFormator";
import ReduxAddToCart from "../ReduxAddToCart";
import styles from "./ProductCard.module.css";
import Rating from "../Rating";
export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <h3>{product.title}</h3>
      <CurrencyFormator
        currency={product.price.currency}
        value={product.price.value}
      />
      <Rating rating={product.rating.value} maxRating={5} />
      <ReduxAddToCart product={product} />
    </div>
  );
}

//card-21221131

import { useState, useRef, useEffect } from "react";
import debounce from "lodash.debounce";

const categories = [
  "All Categories",
  "Deals",
  "Alexa Skills",
  "Amazon Devices",
  "Amazon Fashion",
  "Amazon Pantry",
  "Appliances",
  "Apps & Games",
  "Baby",
  "Beauty",
  "Big Bazaar",
  "Books",
  "Car & Motorbike",
  "Clothing & Accessories",
  "Collectibles",
  "Computers & Accessories",
  "Electronics",
  "Furniture",
  "Garden & Outdoors",
  "Gift Cards",
  "Grocery & Gourmet Foods",
  "Health & Personal Care",
  "Home & Kitchen",
  "Industrial & Scientific",
  "Jewellery",
  "Kindle Store",
  "Luggage & Bags",
  "Luxury Beauty",
  "Movies & TV Shows",
  "Music",
  "Musical Instruments",
  "Office Products",
  "Pet Supplies",
  "Prime Video",
  "Shoes & Handbags",
  "Software",
  "Sports, Fitness & Outdoors",
  "Tools & Home Improvement",
  "Toys & Games",
  "Under ₹500",
  "Video Games",
  "Watches"
];
function Search() {
  const [category, setCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useRef(
    debounce(async (searchTerm) => {
      // fetch search results using searchTerm and update state
      // const result = categories.filter(function (category) {
      //   return category.includes(searchTerm.toLowerCase());
      // });
      if (searchTerm) {
        const json = await fetch(
          `https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products?title=${searchTerm}`
        );
        const res = await json.json();
        console.log(res);

        console.log("Fetching search results for:", searchTerm);
      }
    }, 500)
  );

  useEffect(() => {
    debouncedSearch.current(searchTerm);
  }, [debouncedSearch, searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div id="search">
      <select
        value={category}
        onChange={(e) => setCategory(parseInt(e.target.value, 10))}
      >
        {categories.map((o, i) => (
          <option key={i} value={i}>
            {o}
          </option>
        ))}
      </select>
      <input type="text" onChange={handleSearchChange} value={searchTerm} />
    </div>
  );
}

export default Search;

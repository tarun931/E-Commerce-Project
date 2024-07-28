import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesLoading } from "../../store/categories";
import { loadCategories } from "../../store/categories";

function Categories() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories());
  }, []);
  const cat = useSelector((state) => state.categories);
  console.log();
  console.log(cat);
  if (cat.isLoading) {
    return <div>Loading</div>;
  } else if (cat.error) {
    return <div>{cat.error.value}</div>;
  } else {
    return (
      <ul>
        {cat.categories.map((category) => (
          <li key={category.id}> {category.name}</li>
        ))}
      </ul>
    );
  }
}

export default Categories;

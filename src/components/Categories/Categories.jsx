import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesLoading } from "../../store/categories";
import { loadCategories } from "../../store/categories";

function Categories() {
  const dispatch = useDispatch();
  useEffect(() => {
    // async function loadCategories() {
    //   dispatch(categoriesLoading());
    //   try {
    //     const res = await fetch(
    //       "https://run.mocky.io/v3/297308ac-aeb0-4e98-8868-9c1d3a878a4c"
    //     );
    //     const data = await res.json();
    //     dispatch({ type: "LOAD_CATEGORIES_DONE", payload: data });
    //   } catch (e) {
    //     dispatch({ type: "LOAD_CATEGORIES_ERROR", payload: e });
    //   }
    // }
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

import { Category } from "../typings";

export const fetchCategories = async () => {
  const res = await fetch(`http://localhost:3000/api/getCategories`);
  const data = await res.json();
  console.log(data, "function");
  const categories: Category[] = data.categories;
  return categories;
};


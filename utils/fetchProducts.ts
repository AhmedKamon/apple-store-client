import {  Product } from "../typings";

export const fetchproducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts` );
  const data = await res.json();
  console.log(data,'pro')
  const products: Product[] = data.products;
  return products;
};


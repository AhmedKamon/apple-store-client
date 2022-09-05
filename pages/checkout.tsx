import Head from "next/head";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Product } from "../typings";
import CheckoutProducts from "../components/CheckoutProducts";

function Checkout() {
  const items = useSelector(selectBasketItems);
  const router = useRouter();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  );
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });
    setGroupedItemsInBasket(groupedItems);
  }, [items]);
  console.log(groupedItemsInBasket, "group");
  return (
    <div className="overflow-hidden bg-gradient-to-b from-[#e7ecee] to-gray-400/40">
      <Head>
        <title>Cart</title>
      </Head>
      <Header />
      <main className="mx-auto max-w-5xl pb-24 ">
        <div className="px-5 ">
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl ">
            {items.length > 0 ? "Review your bag" : "Opps your bag is empty"}
          </h1>
          <p className="my-4">Free delivery and returns</p>
          {items.length === 0 && (
            <Button
              title="Continue Shopping"
              onClick={() => router.push("/")}
            />
          )}
        </div>
        {items.length > 0 && (
          <div className=" px-5 md:px-8 backdrop-blur-sm ">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <CheckoutProducts key={key} id={key} items={items} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Checkout;

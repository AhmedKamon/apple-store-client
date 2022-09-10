import Head from "next/head";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Product } from "../typings";
import CheckoutProducts from "../components/CheckoutProducts";
import { Stripe } from "stripe";
import { fetchPostJSON } from "../utils/api-helpers";
import getStripe from "../utils/get-stripe";
// redeploy

function Checkout() {
  const items = useSelector(selectBasketItems);
  const router = useRouter();
  const basketTotal = useSelector(selectBasketTotal);
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
  // checkout session
  const [loading, setLoading] = useState(false);
  const createCheckoutSession = async () => {
    setLoading(true);
    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
      "/api/checkout_session",
      { items: items }
    );
    // server errors
    if ((checkoutSession as any).statusCode === 500) {
      console.log((checkoutSession as any).message);
      return;
    }
    // redirect checkout
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    console.warn(error.message);
    setLoading(false);
  };

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
          <div className="">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <CheckoutProducts key={key} id={key} items={items} />
            ))}
            <div className="mt-6 my-12 ml-auto max-w-3xl">
              <div className="divide-y divide-gray-300">
                <div className="pb-4">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{basketTotal}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>shiping</p>
                    <p>free</p>
                  </div>
                </div>
                <div className="flex justify-between pt-4 font-semibold text-xl">
                  <h4>total</h4>
                  <h4>{basketTotal}</h4>
                </div>
              </div>
              <div className=" mt-5 flex flex-1 flex-col items-center space-y-5 rounded-xl border border-gray-500/30 p-5 ">
                <h4 className="text-xl font-semibold">
                  Would you like to checkout
                </h4>
                <Button
                  width="w-full"
                  loading={loading}
                  noIcon
                  title={`${basketTotal}$`}
                   onClick={createCheckoutSession}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Checkout;

import Head from "next/head"
import Header from "../components/Header"
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Product } from "../typings";

function Checkout() {
    const items = useSelector(selectBasketItems)
    const router = useRouter()
    const [groupedItemsInBasket,setGroupedItemsInBasket]= useState({} as {[key: string]: Product[]})
    useEffect(() =>{
        const groupedItems = items.reduce((results, item) =>{
            (results[item._id] = results[item._id] || [] ).push(item)
            return results
        },{} as {[key: string]: Product[]})
    })
  return (
    <div>
        <Head>
            <title>Cart</title>
        </Head>
        <Header/>
        <main>
            <div>
                <h1 className="my-4 text-3xl font-semibold lg:text-4xl " >{items.length > 0 ? 'Review your bag' : 'Opps your bag is empty' }</h1>
                <p className="my-4" >Free delivery and returns</p>
                {
                    items.length === 0 && (
                        <Button title="Continue Shopping" onClick={()=> router.push('/')} />
                    )
                }
            </div>
        </main>
    </div>
  )
}

export default Checkout
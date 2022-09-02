import Head from "next/head"
import Header from "../components/Header"
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";

function checkout() {
    const items = useSelector(selectBasketItems)
  return (
    <div>
        <Head>
            <title>Cart</title>
        </Head>
        <Header/>
        <main>
            <div>
                <h1>{items.length > 0 ? 'Review your bag' : 'Opps your bag is empty' }</h1>
            </div>
        </main>
    </div>
  )
}

export default checkout
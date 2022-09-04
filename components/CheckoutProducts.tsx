import Image from "next/image";
import { urlFor } from "../sanity";
import { Product } from "../typings"

interface Props {
    items: Product[];
    id: string
}

function CheckoutProducts({items, id}:Props) {
    console.log(items,'grouper singles')
  return (
    <div>
        <div className="relative h-44 w-44 " >
        <Image src={urlFor(items[0].image[0]).url()} alt='products' objectFit="contain" layout="fill" />
        </div>
        <div className=" flex flex-1 items-end lg:items-center " >
            <div>
                <div>
                    <h4>{items[0].title}</h4>
                    <p>{items.length}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProducts
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
            <div className="space-y-4 " >
                <div className="flex flex-col gap-x-8 md:flex-row md:items-center md:justify-center lg
                text-2xl" >
                    <h4 className="font-bold lg:w-95 text-2xl " >{items[0].title}</h4>
                    <p className="flex items-end font-bold" >{items.length} {items.length > 1 ? 'items': 'item'} </p>
                </div>
                <p className="flex cursor-pointer items-end text-blue-500 hover:underline " >Show Product Details</p>
            </div>
            <div>
                <h4>500</h4>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProducts
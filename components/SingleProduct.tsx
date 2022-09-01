import Image from "next/image";
import { Product } from "../typings";
import { urlFor } from "../sanity";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addToBasket } from "../redux/basketSlice";

interface Props {
  product: Product;
}

function SingleProduct({ product }: Props) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(product));
    toast.success(`${product.title} added to basket `, {
      position: "bottom-center",
    });
  };
  return (
    <div className="flex flex-col space-y-3  h-fit w-[320px] select-none bg-[#35383c] rounded-lg p-8 md:h-[400px] md:w-[300px] md:p-8 ">
      <div className="relative h-64 w-full md:h-72 ">
        <Image
          src={urlFor(product.image[0]).url()}
          alt={product.title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-white text-xl md:text-2xl ">
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
        <div
          className=" w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 flex flex-shrink-0 items-center justify-center rounded-full md:h-[70px] md:w-[70px]"
          onClick={addItemToBasket}
        >
          <ShoppingCartIcon className="text-white h-8 w-8 cursor-pointer " />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

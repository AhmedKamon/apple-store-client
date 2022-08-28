import Image from "next/image";
import { Product } from "../typings";
import {urlFor} from '../sanity'

interface Props {
  product: Product;
}

function SingleProduct({ product }: Props) {
  return <div>
    <div>
      {/* <Image src={urlFor(product.image[0]).url()} alt={product.title} /> */}
    </div>
  </div>;
}

export default SingleProduct;

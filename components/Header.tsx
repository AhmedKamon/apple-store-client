import Image from "next/image";
import Link from "next/link";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";

function Header() {
  const session = false;
  const items = useSelector(selectBasketItems)
  return (
    <header className="sticky top-0 z-30 flex items-center w-full justify-between bg-[#e7ecee] p-4 ">
      <div className="flex items-center justify-center md:w-1/5 ">
        <Link href="/">
          <div className=" relative w-5 h-10 cursor-pointer opacity-75 transition hover:opacity-100 ">
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <div className=" hidden md:flex items-center justify-center flex-1 space-x-8 ">
        <a href="" className="headerLink">
          Product
        </a>
        <a href="" className="headerLink">
          Explore
        </a>
        <a href="" className="headerLink">
          Support
        </a>
        <a href="" className="headerLink">
          Business
        </a>
      </div>
      <div className=" flex items-center justify-center gap-x-4 md:w-1/5 ">
        <SearchIcon className="headerIcon" />
        { items.length > 0 &&

          <Link href="/checkout">
          <div className="relative">
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex justify-center items-center z-30 text-[10px] text-white ">
              {items.length}
            </span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        }
        {session ? (
          <Image
            alt="icon"
            className="rounded-full"
            src={
              "https://yt3.ggpht.com/ytc/AMLnZu_3CcNeRc4RziS1ai21e44w3JtWzxTMtEBwE-XJqA=s900-c-k-c0x00ffffff-no-rj"
            }
            width={30}
            height={30}
          />
        ) : (
          <UserIcon className="headerIcon" />
        )}
      </div>
    </header>
  );
}

export default Header;

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-30 flex items-center w-full justify-between bg-[#e7ecee] p-4 " >
        <div className="flex items-center justify-center md:w-1/5 ">
      <Link href="/">
        <div className=" relative w-5 h-10 cursor-pointer opacity-75 transition hover:opacity-100 ">
          <Image src="https://rb.gy/vsvv2o" layout="fill" objectFit="contain" />
        </div>
      </Link>
        </div>
        <div className=" hidden md:flex items-center justify-center flex-1 space-x-8 " >
          <a href="" className="headerLink" >Product</a>
          <a href="" className="headerLink" >Explore</a>
          <a href="" className="headerLink" >Support</a>
          <a href="" className="headerLink" >Business</a>
        </div>
    </header>
  );
}

export default Header;

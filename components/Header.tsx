import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
        <div className="flex items-center justify-center md:w-1/5 ">
      <Link href="/">
        <div className=" relative w-10 h-10 cursor-pointer opacity-75 transition hover:opacity-100 ">
          <Image src="https://rb.gy/vsvv2o" layout="fill" objectFit="contain" />
        </div>
      </Link>
        </div>
    </header>
  );
}

export default Header;

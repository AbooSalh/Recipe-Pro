"use client";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/" className="flex flex-shrink-0 items-center">
    <Image
      alt="Your Company"
      src="/assets/images/logos/logo-black-noBG.png"
      height={50}
      width={50}
    />
  </Link>
);

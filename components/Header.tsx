import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="header mt-3">
      <Link href="/" className="md:flex-1">
        <Image
          src="/assets/images/logo.png"
          alt="SmartDocs"
          width={50}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/assets/icons/logo.png"
          alt="SmartDocs noName"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;

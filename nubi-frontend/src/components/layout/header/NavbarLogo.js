import Image from "next/image";
import React from "react";
import logo1 from "@/assets/logo/nubiLightLogo.png";
import Link from "next/link";
const NavbarLogo = () => {
  return (
    <div className="lg:col-start-1 lg:col-span-2">
      <Link href="/" className="w-logo-sm lg:w-logo-lg ">
        <Image prioriy="false" src={logo1} alt="logo" className="w-9/12 py-2" />
      </Link>
    </div>
  );
};

export default NavbarLogo;

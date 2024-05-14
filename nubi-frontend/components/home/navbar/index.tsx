"use client";

import Image from "next/image";
import LightLogo from "@/public/image/logo/nubiLightLogo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md lg:px-7 z-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Beranda</a>
            </li>
            <li>
              <a>Kategori</a>
              <ul className="p-2">
                <li>
                  <a>Pemrograman</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Daftar</a>
            </li>
            <li>
              <a>Tentang Kami</a>
            </li>
          </ul>
        </div>

        <Image src={LightLogo} alt="Nubi Academy" className=" w-20" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Beranda</a>
          </li>
          <li>
            <details>
              <summary>Kategori</summary>
              <ul className="p-2">
                <li>
                  <a>Pemrograman</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Tentang Kami</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <Link href="/register" className="btn btn-sm hidden lg:flex">
          Daftar
        </Link>
        <Link href="/login" className="btn btn-sm">
          Masuk
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

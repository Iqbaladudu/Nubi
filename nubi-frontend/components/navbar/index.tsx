"use client";

import Image from "next/image";
import LightLogo from "@/public/image/logo/nubiLightLogo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { categoryData } from "@/app/constant";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setIsDrawerOpen(false), [pathname]);

  return (
    <div className="drawer z-50 shadow-md">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        onChange={() => setIsDrawerOpen(!isDrawerOpen)}
        checked={isDrawerOpen}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-100">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Image src={LightLogo} className="w-24" alt="Nubi Academy" />
          </div>
          <div className="flex-none mr-52 hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <details>
                  <summary>Kategori</summary>
                  <ul className="menu menu-sm bg-base-200 w-56 rounded-box">
                    {categoryData.map(({ title, value }, index) => (
                      <li key={index}>
                        <Link href={`/courses?category=${value}`}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              <li>
                <a>Tentang Kami</a>
              </li>
              <li>
                <a>Kontak</a>
              </li>
            </ul>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link href={"/login"}>Masuk</Link>
              </li>
              <li>
                <Link href={"/register"}>Daftar</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-100">
          {/* Sidebar content here */}
          <li>
            <Image src={LightLogo} className=" w-32" alt="Nubi Academy" />
          </li>
          <li>
            <Link href={"/courses"}>Belajar</Link>
          </li>
          <li>
            <Link href={"/login"}>Masuk</Link>
          </li>
          <li>
            <Link href={"/register"}>Daftar</Link>
          </li>
          <li>
            <details>
              <summary>Kategori</summary>
              <ul className="menu menu-sm bg-base-100 w-56 rounded-box">
                <li>
                  <a>Pemrograman</a>
                </li>
                <li>
                  <a>Artificial Intelligence</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Tentang Kami</a>
          </li>
          <li>
            <a>Kontak</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

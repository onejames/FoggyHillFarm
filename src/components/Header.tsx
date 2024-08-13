import React from 'react'
import Link from 'next/link'
import dynamic from "next/dynamic";

import { Bitter } from 'next/font/google'

const bitter = Bitter({ subsets: ['latin'] })

import SearchWidget from './SearchWidget'

import HeaderMenue from './Header/Menue'

const CartWidget = dynamic(
    () => {
      return import("./CartWidget");
    },
    { ssr: false }
);

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-xl my-4">
        <div className="navbar-start">
            <HeaderMenue></HeaderMenue>
        </div>

        <div className={bitter.className + "navbar-center -mr-10"}>
            <Link href="/" className="btn btn-ghost text-2xl farm-text">Foggy Hill Farm</Link>
        </div>

        <div className="navbar-end flex-none">
            
            <SearchWidget />

            <CartWidget />

            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle placeholder avatar">
                    <div className="bg-neutral text-neutral-content w-8 rounded-full">
                        <span className="text-xs">JL</span>
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import Link from 'next/link'

import { Bitter } from 'next/font/google'

const bitter = Bitter({ subsets: ['latin'] })

import SearchModal from './SearchModal'
import SearchButton from './SearchButton'
import CartWidget from './CartWidget'
import HeaderMenue from './Header/Menue'

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
        <SearchModal />
    </div>
  )
}

export default Header
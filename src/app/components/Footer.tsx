import React from 'react'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 my-4">
        <nav>
            <h6 className="footer-title">Services</h6>
            <Link href={""} className="link link-hover">Batch order</Link>
            <Link href={""} className="link link-hover">Design</Link>
        </nav>
        <nav>
            <h6 className="footer-title">Company</h6>
            <Link href={"about-us"} className="link link-hover">About us</Link>
            <Link href={"contact-us"} className="link link-hover">Contact</Link>
        </nav>
        <nav>
            <h6 className="footer-title">Legal</h6>
            <Link href={"privacy-policy"} className="link link-hover">Privacy policy</Link>
            <Link href={"terms"} className="link link-hover">Terms of Service</Link>
        </nav>
    </footer>
  )
}

export default Footer
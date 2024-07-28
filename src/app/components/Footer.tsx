import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 my-4">
        <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Batch order</a>
            <a className="link link-hover">Design</a>
        </nav>
        <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
        </nav>
        <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>
    </footer>
  )
}

export default Footer
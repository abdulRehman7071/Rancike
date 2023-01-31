import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const navLinks = ["Pricing", "Featues", "Customers", "Contact Us"]
    const [showNav, setShowNav] = useState(true)
    return (
        <header>
            <span className='hamDiv'  >
                {
                    showNav ? <i className="fa-solid fa-xmark" onClick={() => setShowNav((prev) => !prev)}></i> : <i className="fa-solid fa-bars" onClick={() => setShowNav((prev) => !prev)}></i>
                }
            </span>
            <div>
                <img src="/Logo.png" alt="" />
            </div>
            <nav className={`${showNav ? 'show' : 'hide'}`}>
                <ul>
                    {
                        navLinks.map((link, i) => (
                            <li key={i} >
                                {link}
                            </li>

                        ))
                    }
                </ul>

            </nav>
            <button className={`${showNav ? 'show' : 'hide'}`}>
                LOGIN/SIGNUP
            </button>
        </header>
    )
}

export default Navbar
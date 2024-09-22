import { useState } from "react"
import { avatarImg, cartIcon, closeIcon, menuIcon } from "../assets/index.js"
import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='navbar section-center'>
            <div className={`slider ${isOpen && "slider-open"}`}>
                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
                <div className="left-navbar">
                    <div className="ham-menu"
                        onClick={()=> setIsOpen((prev)=> !prev)}
                    >
                        {
                            isOpen? <img src={closeIcon} alt="closeIcon" />:
                            <img src={menuIcon} alt="menu-icon" />
                        }
                    </div>
                    <h2 className="logo">sneakers</h2>
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="right-navbar">
                    <div className="cart-icon">
                        <img src={cartIcon} alt="cart-icon" />
                    </div>
                    <div className="avatar-icon">
                        <img src={avatarImg} alt="avatar-img" />
                    </div>
                </div>
        </div>
    )
}

export default Navbar
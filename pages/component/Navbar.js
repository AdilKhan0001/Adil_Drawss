import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from "../assests/logo.png"
import Link from 'next/link'
export default function Navbar() {

    let [activeClass, setActiveClass] = useState("navback")

    let [change, setChange]= useState()
    let scrolls = (e) => {
    // var scrollTop = e.scrollTop;

        setChange(window.scrollY)
        console.log("assasasa", window.scrollY)

        if (window.scrollY> 80) {
            setActiveClass("bg-black")
        }
        else {
            setActiveClass("navback")

        } 
    }
    useEffect(() => {
        window.addEventListener('scroll', scroll);
        let getScrollSection = document.querySelector("#__next-build-watcher");
        // console.log("scsd", window.scrollY)
        // getScrollSection.addEventListener("scroll", scrolls);
        scrolls(getScrollSection)
        // return () => window.removeEventListener("scroll", scrolls);

    }, [change])

    return (
        <>
            <nav className={`navbar navbar-expand-lg ${activeClass} ps-5 pe-5 fixed-top`}>
                <div className="container-fluid">
                    <Link href="/">

                        <Image src={logo} width={40} height={40} />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/portfolio">Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href='#'>About</Link>
                                </li>
                            </ul>
                        </div>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="
                                btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

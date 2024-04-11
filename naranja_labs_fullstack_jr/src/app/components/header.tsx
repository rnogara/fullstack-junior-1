"use client";
import Contact from "./contact";
import NavBar from "./navBar";

export default function Header() {
    return (
        <header className="w-10/12">
            <Contact />
            <div className="line"></div>
            <NavBar />
        </header>
    )
}
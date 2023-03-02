import { Navbar } from "./navbar"
import "./header.css"
import logo from "../assets/logoArthur.svg"

export const Header = () => {
    return (
        <header>
            <img alt="Logo Arthur Le Menn" src={logo}/>
            <Navbar />
        </header>
    )
}

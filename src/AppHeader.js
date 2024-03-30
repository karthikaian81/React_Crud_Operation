import React from "react";
import './AppHeader.css';
import { Link,useNavigate } from "react-router-dom";

export default function AppHeader()
{
    const navigate = useNavigate()
    const ContactNav = () =>{
        navigate("/Test")
    }
    return (
        <>
        <nav>
            <ul style={{display:"inline-flex"}}>
                <li>
                    <Link className="Header-Button" to="/">Home</Link> 
                </li>
                <li>
                    <Link className="Header-Button" to="/Test">Test1</Link> 
                </li>
                <li>
                <Link className="Header-Button" to="/AppMain">Main</Link> 
                </li>
                <li>
                    <button className="Header-Button" onClick={ContactNav} type="submit">Contact</button>
                </li>
            </ul>
        </nav>
        <header>React ToDo Page</header>
        </>
    )

}

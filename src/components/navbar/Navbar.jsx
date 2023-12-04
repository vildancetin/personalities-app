import "./Navbar.scss";
import img from "../../img/brain.jpg"
import { Header } from "../header/Header";
const Navbar=()=>{
    return (
        <>
        <nav>
            <img src={img} alt="brain" />
            <ul>
                <li>Analysts</li>
                <li>Diplomats</li>
                <li>Sentinels</li>
                <li>Explorers</li>
            </ul>
        </nav>
        <Header/>
        </>
    )
}
export default Navbar
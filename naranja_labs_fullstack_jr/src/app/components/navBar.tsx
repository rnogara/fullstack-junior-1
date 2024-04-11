import Image from "next/image";
import Advencar from '../../assets/logos/Advencar.png'; 
import Menu from "./menu";

export default function NavBar() {
    return (
        <section className="flex flex-row w-full h-14 mt-4 mb-4 p-0.5 justify-between items-center">
            <Image src={Advencar} alt="Advencar logo" />
            <Menu />
        </section>
    )
}
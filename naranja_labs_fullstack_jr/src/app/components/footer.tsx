import Image from "next/image";
import SimSong from "../../assets/logos/SimSong.png";
import Harps from "../../assets/logos/Harps.png";
import DiskVan from "../../assets/logos/DiskVan.png";
import Ikon from "../../assets/logos/Ikon.png";
import Strons from "../../assets/logos/Strons.png";
import Cocoon from "../../assets/logos/Cocoon.png";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center h-1/6 w-full bg-white">
            <div className="flex flex-row justify-center items-center w-10/12 h-[54px]">
                <Image src={SimSong} alt="SimSong logo" className="mr-20 -mb-1" />
                <Image src={Harps} alt="Harps logo" className="mr-20 -mb-2" />
                <Image src={DiskVan} alt="DiskVan logo" className="mr-20" />
                <Image src={Ikon} alt="Ikon logo" className="mr-20" />
                <Image src={Strons} alt="Strons logo" className="mr-20" />
                <Image src={Cocoon} alt="Cocoon logo" className="-mb-1" />
            </div>
        </footer>
    )
}
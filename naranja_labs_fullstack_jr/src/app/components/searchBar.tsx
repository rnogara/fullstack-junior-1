import { MapPinIcon, CalendarDaysIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import CarIcon from "../../assets/icons/CarIcon.png"

export default function SearchBar() {
    return (
        <div className="relative flex flex-row justify-center items-center w-[1240px] h-[138px] bg-white border rounded-full -mt-[90px] z-40">
            <div className="flex flex-col items-start">
                <p>Location</p>
                <div className="flex flex-row">
                    <MapPinIcon />
                    <input />
                </div>
            </div>
            <div className="flex flex-col items-start">
                <p>Car Type</p>
                <div className="flex flex-row">
                    <Image src={ CarIcon } alt="a car icon" />
                    <input />
                </div>
            </div>
            <div className="flex flex-col items-start">
                <p>Pick Up</p>
                <div className="flex flex-row">
                    <CalendarDaysIcon />
                    <input />
                </div>
            </div>
            <div className="flex flex-col items-start">
                <p>Return</p>
                <div className="flex flex-row">
                    <CalendarDaysIcon />
                    <input />
                </div>
            </div>
            <button className="highlight-bg-secondary text-white">Search</button>
        </div>
    )
}
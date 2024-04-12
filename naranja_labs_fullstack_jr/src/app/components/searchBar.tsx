import { MapPinIcon, CalendarDaysIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import CarIcon from "../../assets/icons/CarIcon.png"

export default function SearchBar() {
    return (
        <div className="relative flex flex-row justify-center items-center w-[1240px] h-[138px] bg-white border rounded-full -mt-[90px] z-40">
            <div className="flex flex-col justify-around items-start mr-8 w-[192px] h-[62px]">
                <p className="text-secondary">Location</p>
                <div className="flex flex-row items-center">
                    <MapPinIcon className="highlight-text w-6 h-6 stroke-2" />
                    <button className="text-[18px]/[27px] mt-1 font-medium ml-2">Choose Location</button>
                </div>
            </div>
            <div className="flex flex-col justify-around items-start mr-8 w-[208px] h-[62px]">
                <p className="text-secondary">Car Type</p>
                <div className="flex flex-row items-center">
                    <Image src={ CarIcon } alt="a car icon" className="w-5 h-4" />
                    <button className="flex flex-row justify-between items-center w-full text-[18px]/[27px] mt-1 font-medium ml-2">
                        City Car
                        <svg className="-mr-1 ml-3 h-5 w-5 normal-text" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" cap-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="line-vertical h-3/6 mr-8"></div>
            <div className="flex flex-col justify-around items-start mr-8 w-[208px] h-[62px]">
                <p className="text-secondary">Pick Up</p>
                <div className="flex flex-row items-center">
                    <CalendarDaysIcon className="highlight-text w-6 h-6 stroke-2" />
                    <button className="flex flex-row justify-between items-center w-full text-[18px]/[27px] mt-1 font-medium ml-2">
                        17 July 2021
                        <svg className="-mr-1 ml-3 h-5 w-5 normal-text" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" cap-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-around items-start mr-8 w-[208px] h-[62px]">
                <p className="text-secondary">Return</p>
                <div className="flex flex-row items-center">
                    <CalendarDaysIcon className="highlight-text w-6 h-6 stroke-2" />
                    <button className="flex flex-row justify-between items-center w-full text-[18px]/[27px] mt-1 font-medium ml-2">
                        17 July 2021
                        <svg className="-mr-1 ml-3 h-5 w-5 normal-text" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" cap-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <button className="highlight-bg-secondary text-white w-[160px] h-[60px] border rounded-full">Search</button>
        </div>
    )
}
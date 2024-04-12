import { bebas } from "../fonts";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function Title() {
  return (
    <div className="flex flex-col justify-between items-start w-[784px] h-[374px]">
        <h1 className={`${bebas.className} title text-balance w-[784]`}>
            Accompany your journey with comfort
        </h1>
        <p className="text-secondary -mt-4 text-[24px]/[40px] w-[760px]">Car rent services for various terrain with guaranteed quality</p>
        <div className="flex flex-row items-center">
            <button className="w-[149px] h-[60px] border border-solid border-[#313131] rounded-full text-[18px]/[24px]">Learn More</button>
            <div className="flex flex-row items-center ml-10">
                <button className="h-12 w-12 border border-solid border-white bg-white rounded-full drop-shadow-play z-20">
                    <PlayIcon className="m-auto pl-0.5 h-6 w-6" />
                </button>
                <p className="ml-6 text-[18px]/[27px]">Watch Video</p>
            </div>
        </div>
    </div>
  );
}
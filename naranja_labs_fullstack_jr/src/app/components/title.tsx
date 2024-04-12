import { bebas } from "../fonts";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function Title() {
  return (
    <div className="flex flex-col justify-between items-start w-[784px] h-[374px]">
        <h1 className={`${bebas.className} title text-balance w-[784]`}>
            Accompany your journey with comfort
        </h1>
        <p className="text-secondary text-[24px]/[40px]">Car rent services for various terrain with guaranteed quality</p>
        <div className="flex flex-row items-center">
            <button className="w-[149px] h-[60px] border border-solid border-[#313131] rounded-full">Learn More</button>
            <div className="flex flex-row items-center ml-12">
                <button className="h-12 w-12 border border-solid border-white bg-white rounded-full">
                    <PlayIcon className="m-auto pl-0.5 h-6 w-6" />
                </button>
                <p className="ml-6">Watch Video</p>
            </div>
        </div>
    </div>
  );
}
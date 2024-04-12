import Image from "next/image";
import rectangle_1 from "../../assets/rectangle_1.png";
import rectangle_2 from "../../assets/rectangle_2.png";
import sportCar from "../../assets/sport-car.png";

export default function CarBanner() {
    return (
        <div className="relative ml-8 -mt-5 w-[890px] h-[559px]">
            <div className="relative w-[815px] h-[539px]">
                <Image src={rectangle_1} alt="an orange rectangle"  className="z-0 w-[815px] h-[539px]" />
                <Image src={rectangle_2} alt="a white rectangle" className="absolute bottom-0 right-24 z-10" />
            </div>
            <Image src={sportCar} alt="an image of a sport car" className="fixed top-40 right-[170px] object-fill w-[890px] h-[690px] drop-shadow-car z-20" />
        </div>
    )
}
import Image from "next/image";
import rectangle_1 from "../../assets/rectangle_1.png";
import rectangle_2 from "../../assets/rectangle_2.png";
import sportCar from "../../assets/sport-car.png";

export default function CarBanner() {
    return (
        <div className="relative ml-20 w-[890px] h-[559px]">
            <div className="relative w-[815px] h-[539px]">
                <Image src={rectangle_1} alt="an orange rectangle"  className="z-0 w-[815px] h-[539px]" />
                <Image src={rectangle_2} alt="a white rectangle" className="absolute bottom-0 right-24 z-10" />
            </div>
            <Image src={sportCar} alt="an image of a sport car" className="absolute -top-14 right-[60px] w-[890px] h-auto  object-fill drop-shadow-4xl z-20" />
        </div>
    )
}
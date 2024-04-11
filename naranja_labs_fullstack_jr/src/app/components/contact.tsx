import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/Twitter.svg';
import linkedin from '../../assets/icons/Linkedin.svg';

export default function Contact() {
    return (
        <section className='w-full flex flex-row mt-4 mb-4 justify-between'>
            <div className='flex flex-row w-auto h-7 justify-between itens-center'>
                <PhoneIcon className='highlight-text h-5 w-5 m-0.5 stroke-2' />
                <p className='poppins text-lg mb-0.5 ml-3'>+12 345 6789 0</p>
                <EnvelopeIcon className='highlight-text h-5 w-5 m-0.5 stroke-2 ml-8' />
                <p className='poppins text-lg mb-0.5 ml-3'>support@homie.com</p>
            </div>
            <div className='flex flex-row w-48 h-7 justify-between itens-center'>
                <Image src={instagram} alt='instagram logo' className='h-5 w-5 m-0.5' />
                <Image src={facebook} alt='facebook logo' className='h-5 w-5 m-0.5' />
                <Image src={twitter} alt='twitter logo' className='h-5 w-5 m-0.5' />
                <Image src={linkedin} alt='linkedin logo' className='h-5 w-5 m-0.5' />
            </div>
        </section>
    )
}
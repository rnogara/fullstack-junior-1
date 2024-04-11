import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Contact() {
    return (
        <section className='flex flex-row m-3 justify-between'>
            <div className='flex flex-row h-7 justify-between itens-center'>
                <PhoneIcon className='highlight-text h-5 w-5 m-0.5 stroke-2' />
                <p className='poppins text-lg mb-0.5 ml-2'>+12 345 6789 0</p>
                <EnvelopeIcon className='highlight-text h-5 w-5 m-0.5 stroke-2 ml-4' />
                <p className='poppins text-lg mb-0.5 ml-2'>support@homie.com</p>
            </div>
        </section>
    )
}
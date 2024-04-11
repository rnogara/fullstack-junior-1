export default function Menu() {

    const handleClick = () => {
        const menu = document.getElementById('hidden-menu');
        if (!menu) return console.error('Menu not found');
        menu.classList.contains('hidden')? menu.classList.remove('hidden') : menu.classList.add('hidden');
    }

    return (
        <nav className="flex flex-row w-auto justify-between items-center">
            <a href="#" className="poppins text-lg mb-0.5">About</a>
            <a href="#" className="poppins text-lg mb-0.5 ml-14">Services</a>
            <a href="#" className="poppins text-lg mb-0.5 ml-14">Car Catalogue</a>
            <a href="#" className="poppins text-lg mb-0.5 ml-14">FAQ</a>
            <button type="button" className="poppins text-lg mb-0.5 ml-14" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={handleClick}>
                More
            </button>
            <svg className="-mr-1 ml-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" cap-rule="evenodd" />
            </svg>
            <div id="hidden-menu" className="absolute flex flex-col right-72 top-28 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <a href="#" className="poppins text-lg mb-0.5 ml-3">Prices</a>
                <a href="#" className="poppins text-lg mb-0.5 ml-3">Reviews</a>
                <a href="#" className="poppins text-lg mb-0.5 ml-3">Our Team</a>
                <a href="#" className="poppins text-lg mb-0.5 ml-3">Stores Location</a>
            </div>
        </nav>
    )
}
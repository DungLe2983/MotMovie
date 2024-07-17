import PropType from 'prop-types';
import { useState } from 'react';

const Header = ({ onSearch }) => {
    const [textSearch, setTextSearch] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        // <div className='p-4 flex items-center justify-between bg-black'>
        //     <div className='flex items-center space-x-14'>
        //         <h1 className='text-[30px] font-bold uppercase text-red-700'>
        //             MotMovie
        //         </h1>
        //         <nav className='flex items-center space-x-8 '>
        //             <a
        //                 href='/'
        //                 className='text-white font-semibold hover:text-slate-200'
        //             >
        //                 Home
        //             </a>
        //             <a
        //                 href='/about'
        //                 className='text-white font-semibold hover:text-slate-200'
        //             >
        //                 About
        //             </a>
        //             <a
        //                 href='/'
        //                 className='text-white font-semibold hover:text-slate-200'
        //             >
        //                 Contact
        //             </a>
        //         </nav>
        //     </div>
        //     <div className='flex items-center space-x-4 bg-white'>
        //         <input
        //             type='text'
        //             placeholder='Search...'
        //             value={textSearch}
        //             className='p-3 text-black focus:outline-none focus:ring-0 '
        //             onChange={(e) => setTextSearch(e.target.value)}
        //         />
        //         <i
        //             onClick={() => onSearch(textSearch)}
        //             className='ri-search-line text-black text-xl px-4 cursor-pointer'
        //         ></i>
        //     </div>
        // </div>
        <nav className='bg-black border-gray-200 dark:bg-gray-900'>
            <div className='max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <h2 className=' uppercase text-red-700 self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                    MotMovie
                </h2>
                <div className='flex md:order-2'>
                    <div className='relative hidden md:block'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                            <span className='sr-only'>Search icon</span>
                            <i
                                className='ri-search-line text-gray-500
                                dark:text-gray-400'
                            ></i>
                        </div>
                        <input
                            type='text'
                            id='search-navbar'
                            value={textSearch}
                            onChange={(e) => setTextSearch(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    onSearch(textSearch);
                                    setTextSearch('');
                                }
                            }}
                            className='block w-full p-2 ps-10 text-sm text-gray-900 bg-gray-50 focus:outline-none focus:ring-0 '
                            placeholder='Search...'
                        />
                    </div>
                    <button
                        data-collapse-toggle='navbar-search'
                        type='button'
                        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-transparent border border-gray-700 '
                        aria-controls='navbar-search'
                        aria-expanded='false'
                        onClick={toggleMobileMenu}
                    >
                        <span className='sr-only'>Open main menu</span>
                        <i className='ri-menu-line text-base '></i>
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                        isMobileMenuOpen ? 'block' : 'hidden'
                    }`}
                    id='navbar-search'
                >
                    <div className='relative mt-3 md:hidden'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                            <svg
                                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 20 20'
                            >
                                <path
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                                />
                            </svg>
                        </div>
                        <input
                            type='text'
                            id='search-navbar'
                            className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='Search...'
                            value={textSearch}
                            onChange={(e) => setTextSearch(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    onSearch(textSearch);
                                    setTextSearch('');
                                }
                            }}
                        />
                    </div>
                    <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 mr-0 lg:mr-[800px]'>
                        <li>
                            <a
                                href='/'
                                className='block py-2 px-3 text-white rounded md:bg-transparent hover:bg-gray-800 md:hover:text-red-700 md:p-0 '
                                aria-current='page'
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href='/about'
                                className='block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-red-700 md:p-0 '
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href='/'
                                className='block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white '
                            >
                                Services
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Header.propTypes = { onSearch: PropType.func };
export default Header;

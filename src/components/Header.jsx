

const Header = () => {
  return (
      <div className='p-4 flex items-center justify-between bg-black'>
          <div className='flex items-center space-x-4'>
              <h1 className='text-[30px] font-bold uppercase text-red-700'>
                  MotMovie
              </h1>
              <nav className='flex items-center space-x-4 '>
                  <a href='/home' className='text-white font-semibold'>
                      Home
                  </a>
                  <a href='/about' className='text-white font-semibold'>
                      About
                  </a>
                  <a href='/contact' className='text-white font-semibold'>
                      Contact
                  </a>
              </nav>
          </div>
          <div className='flex items-center space-x-4 bg-white'>
              <input
                  type='text'
                  placeholder='Search...'
                  className='p-3 text-black focus:outline-none focus:ring-0 '
              />
              <i className='ri-search-line text-black text-xl px-4 cursor-pointer'></i>
          </div>
      </div>
  );
}

export default Header

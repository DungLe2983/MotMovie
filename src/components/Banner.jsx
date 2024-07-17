import OBS from '../assets/obs.jpg'
import PlayIcon from '../assets/playbutton.png'
const Banner = () => {
    return (
        <div className='w-full h-[600px] bg-banner bg-center bg-no-repeat object-cover bg-cover relative'>
            <div className='h-full w-full absolute top-0 left-0 bg-black opacity-40' />
            <div className='w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20'>
                <div className='flex flex-col space-y-5 items-baseline w-1/2'>
                    <p className='text-white bg-gradient-to-r from-red-600 to-red-300 py-2 px-3 text-xs md:text-base'>
                        TV Show
                    </p>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-white text-md md:text-[40px] font-semibold'>
                            Mùa hè yêu dấu của chúng ta
                        </h2>
                        <div className='flex items-center space-x-3'>
                            <i className='ri-star-fill text-3xl text-yellow-400'></i>
                            <i className='ri-star-fill text-3xl text-yellow-400'></i>
                            <i className='ri-star-fill text-3xl text-yellow-400'></i>
                            <i className='ri-star-fill text-3xl text-yellow-400'></i>
                            <i className='ri-star-fill text-3xl text-yellow-400'></i>
                        </div>
                        <p className='text-white text-xs md:text-base'>
                            A coming-of-age romantic comedy that revolves around
                            Choi Ung (Choi Woo-shik) and Kook Yeon-soo (Kim
                            Da-mi), ex-lovers who broke up with a promise to
                            never meet again. As luck would have it, the
                            documentary they filmed ten years ago in high school
                            went viral and they are forced to face the cameras
                            together again by their producer friend. The series
                            depicts their complicated feelings and growth.
                        </p>
                        <p className='text-white text-xs md:text-base'>
                            This drama shows what love feels like. Instead of
                            discussing practical issues like family conflicts,
                            it tells a story about throb, memory and dream.
                            Romance is revealed in many small, unnoticed acts.
                        </p>
                        <div className='flex items-center gap-2'>
                            <button className='p-3 bg-black hover:bg-slate-800 text-white font-bold text-xs md:text-sm'>
                                Chi tiết
                            </button>
                            <button className='p-3 bg-red-600 hover:bg-red-500 text-white font-bold  text-xs md:text-sm'>
                                Xem phim
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <div className='w-[450px] h-[550px] relative group cursor-pointer '>
                        <img
                            src={OBS}
                            alt='ImgBanner'
                            className='w-full h-full object-cover'
                        />
                        <div className=' absolute h-full w-full top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                            <img
                                src={PlayIcon}
                                alt='playButton'
                                className='w-16 h-16 relative z-20'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

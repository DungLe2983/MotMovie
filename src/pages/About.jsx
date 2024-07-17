

const About = () => {
  return (
      <div className='py-16 bg-black opacity-90 text-white'>
          <div className='max-w-screen-xl mx-auto h-full px-4'>
              <div>
                  <i className='ri-information-line text-2xl'></i>
              </div>
              <h2 className='font-bold text-4xl mt-2'>About us.</h2>
              <p className='mt-8 text-gray-400'>
                  Established in <span className='text-red-400'>2024</span>,
                  MotMovie stands as a dynamic online community that unites
                  movie enthusiasts, offering a unique platform where users can
                  come together to explore, discuss, and share their favorite
                  films. With a strong emphasis on fostering a sense of
                  connection and cinematic appreciation, MotMovie goes beyond
                  being a mere movie streaming service. This web platform is
                  movie-centric, providing filmmakers and movie lovers with
                  cutting-edge tools and resources to not only showcase their
                  passion but also to cultivate and expand their cinematic
                  journeys.
                  <br />
                  <br />
                  Boasting an extensive library featuring a diverse range of
                  movies, MotMovie brings together a collection of over 100,000
                  films from a community of 5 million filmmakers and movie
                  enthusiasts. With its commitment to empowering both creators
                  and fans alike, MotMovie envisions a future where the magic of
                  cinema is celebrated and shared collaboratively. Whether
                  you are a fan seeking recommendations, a filmmaker looking to
                  showcase your work, or simply someone who appreciates the art
                  of storytelling, MotMovie provides a vibrant platform to
                  connect with like-minded individuals and immerse yourself in
                  the world of movies.
              </p>

              <p className='font-bold text-2xl my-8'>Follow us</p>
              <div className='flex flex-col gap-6'>
                  <div className='flex flex-row gap-4 items-center cursor-pointer'>
                      <img
                          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png'
                          alt='instagram'
                          className='h-4 w-4'
                      />
                      <p>Instagram</p>
                  </div>
                  <div className='flex flex-row gap-4 items-center cursor-pointer'>
                      <img
                          src='https://www.facebook.com/images/fb_icon_325x325.png'
                          alt='instagram'
                          className='h-4 w-4'
                      />
                      <p>Facebook</p>
                  </div>
                  <div className='flex flex-row gap-4 items-center cursor-pointer'>
                      <img
                          src='https://cdn.iconscout.com/icon/free/png-256/free-youtube-268-721990.png?f=webp'
                          alt='instagram'
                          className='h-4 w-4'
                      />
                      <p>Youtube</p>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default About

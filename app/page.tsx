import Image from 'next/image';
import Card from '../components/card/card';

const page = () => {
  return (
    <>
      <div className='px-4 pt-4  mx-auto sm:px-10 sm:pt-6 sm:relative lg:max-w-[1110px]'>
        <div className='flex justify-between items-center mb-[38px] sm:mb-[99px] lg:mb-[186px] z-50'>
          <Image src='/assets/logo-dark.svg' alt='logo' height={400} width={400} className='w-[89px] h-auto'></Image>
          <button className=' bg-blue-dark cursor-pointer hover:bg-grey-waikawa text-white font-bold py-[10px]  px-6 rounded-[28px]'>
            Get Started
          </button>
        </div>
        <div className='mb-[66px] sm:flex sm:mb-[186px] lg:mb-[226px] -z-30'>
          <div className='sm:max-w-[398px]'>
            <h2 className=' mb-[26px]'>Maximize skill, minimize budget</h2>
            <p className=' text-grey leading-[26px] font-medium mb-6'>
              Our modern courses across a range of in-demand skills will give you the knowledge you need to live the
              life you want.
            </p>
            <button className='w-[167px] h-[56px] bg-gradient-to-b from-orange-pinkish to-pink-neon text-white rounded-[31.5px] font-bold relative hover:after:absolute hover:after:bg-white-transparent  hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0'>
              Get Started
            </button>
          </div>
          <div className=' -z-50'>
            <Image
              className=' sm:hidden '
              src='/assets/image-hero-mobile@2x.webp'
              alt='Drinking-Coffee'
              width={1000}
              height={1000}
            ></Image>
            <Image
              className='hidden sm:block sm:absolute sm:-top-[93px] sm:-right-[298px] lg:hidden '
              src='/assets/image-hero-tablet@2x.webp'
              alt='Drinking-Coffee'
              width={640}
              height={640}
            ></Image>
            <Image
              className='hidden lg:block lg:absolute lg:-top-[146px] lg:-right-[336px]'
              src='/assets/image-hero-desktop@2x.webp'
              alt='Drinking-Coffee'
              width={992}
              height={937}
            ></Image>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-b from-white to-[#F0F1FF] pb-20'>
        <div className='p-4 mx-auto  grid gap-10  sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1110px]'>
          <div className='bg-gradient-to-b from-orange-pinkish to-pink-neon text-white rounded-[10px] pt-6 pb-8 px-7 sm:pt-[56px] hover:after:rounded-[28px] '>
            <h4> Check out our most popular courses!</h4>
          </div>
          <Card
            title='Animation'
            detail='Learn the latest animation techniques to create stunning motion
design and captivate your audience.'
            url='/assets/icon-animation.svg'
          ></Card>
          <Card
            title='Design'
            detail='Create beautiful, usable interfaces to help shape the future of
          how the web looks.'
            url='/assets/icon-design.svg'
          ></Card>
          <Card
            title='Photography'
            detail='Explore critical fundamentals like lighting, composition, and focus
          to capture exceptional photos.'
            url='/assets/icon-photography.svg'
          ></Card>
          <Card
            title='Crypto'
            detail='All you need to know to get started investing in crypto. Go from beginner
          to advanced with this 54 hour course.
          Get Started'
            url='/assets/icon-crypto.svg'
          ></Card>
          <Card
            title='Business'
            detail='A step-by-step playbook to help you start, scale, and sustain your business
          without outside investment.'
            url='/assets/icon-business.svg'
          ></Card>
        </div>
      </div>
      <footer className=' bg-blue-dark py-9 px-4 sm:px-10  '>
        <div className='flex justify-between items-center lg:max-w-[1110px] mx-auto'>
          <Image src='/assets/logo-light.svg' alt='logo' height={400} width={400} className='w-[89px] h-auto'></Image>
          <button className=' bg-gradient-to-b from-blue-ultramarine to-pink-neon text-white font-bold py-[10px]  px-6 rounded-[28px] relative hover:after:absolute hover:after:bg-white-transparent  hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:rounded-[28px]'>
            Get Started
          </button>
        </div>
      </footer>
    </>
  );
};

export default page;

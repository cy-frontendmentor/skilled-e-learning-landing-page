import Image from 'next/image';

const Card = ({ title, detail, url }: { title: any; detail: string; url: string }) => {
  return (
    <div className='relative px-[28px] pt-[56px] pb-8 rounded-[10px] bg-white'>
      <Image className='w-[56px] absolute left-7 -top-6' src={url} alt='icon' width={200} height={200}></Image>
      <h5 className=' font-extrabold text-[20px]  mb-4  text-blue-dark '>{title}</h5>
      <p className='text-grey leading-[26px] mb-6'>{detail}</p>
      <a href='#' className='text-red-pinkish font-bold text-lg'>
        Get Started
      </a>
    </div>
  );
};

export default Card;

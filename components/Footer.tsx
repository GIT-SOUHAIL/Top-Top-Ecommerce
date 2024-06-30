import { footerLinks, socialMedia } from "@/app";
import Image from "next/image";
import Link from "next/link";
import img from '@/public/assets/fb.png'


const Footer = () => {
  return (
    <footer
    className='max-container border-t bg-black text-white x3:px-[1rem] mt-[6rem] py-[3rem] x4:px-[1.2rem] x5:px-[1.6] x6:px-[2.2rem] m7:px[2.8] m8:px-[3.5rem] m9:px-[4rem] lg:px-[5rem] wide:px-[10rem]'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
      <div className='flex flex-col items-start'>
      <Link href="/">
      <h1 className="text-xl md:text-2xl font-bold font-title">
      Top-Top<span className="text-primary">Commerce</span>
      </h1>
      </Link>
      <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
      Get shoes ready for the new term at your nearest Top-Top store. Find
      Your perfect Size In Store. Get Rewards
      </p>
      <div className='flex items-center gap-5 mt-8'>
      {socialMedia.map((icon) => (
      <div
      className='flex justify-center items-center w-12 h-12 bg-white rounded-full hover:border-2 hover:bg-primary'
     key={icon.alt}
     >
    <Link href={icon.link}><Image src={icon.src} alt={icon.alt} width={24} height={24}  /></Link>
     </div>
     ))}
     </div>
     </div>
     <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
     {footerLinks.map((section) => (
     <div key={section.title}>
     <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
     {section.title}
     </h4>
     <ul>
     {section.links.map((link) => (
     <li
     className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
     key={link.name}
     >
     <Link href={link.link} className=" hover:text-primary">{link.name}</Link>
     </li>
     ))}
     </ul>
     </div>
     ))}
     </div>
     </div>
     <div className='flex justify-evenly text-white   rounded-md mt-24 max-sm:flex-col max-sm:items-center'>
     <div className='flex flex-1 items-center gap-2 font-montserrat cursor-pointer'>
     <p>Copyright. All rights reserved. Made by <span className=" text-primary lg:ml-[1rem] font-title ">Souhail Mougrane</span> </p>
     </div>
     <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
     </div>
    </footer>
  );
};

export default Footer;
"use client";
import Image from "next/image";
import  Custombtn  from "./Custombtn";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car faster than ever !
        </h1>
        <p className="hero__subtitle">
          Optimize your car rental experience seamlessly through our booking
          website.
        </p>
        <Custombtn
          title="Explore Cars"
          containerstyle="bg-primary-blue text-white rounded-full mt-10   "
          handleclick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero png" fill className="object-contain"/>
          </div>
         <div className="hero__image-overlay"></div>
       
      </div>
    </div>
  );
};

export default Hero;

"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import Custombtn from "./Custombtn";
import { calculateCarRent } from "@/utils";

interface CarcardProps {
  car: CarProps;
}

const Carcard = ({ car }: CarcardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isopen, setIsopen] = useState(false)
  return (
    <div className="car-card group ">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[23px] font-bold ">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full my-3 h-40 object-contain ">
        <Image
          src="/hero.png"
          alt="car-image"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2 ">
        <div className="flex group-hover:invisible w-full justify-between text-gray ">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="steering-wheel.svg"
              height={20}
              width={20}
              alt="wheel"
            />
            <p className="text-[14px] ">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="tire.svg" height={20} width={20} alt="wheel" />
            <p className="text-[14px] ">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="gas.svg" height={20} width={20} alt="wheel" />
            <p className="text-[14px] ">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">

        <Custombtn
          title="View More"
          btnType="button"
          containerstyle="w-full py-[16px] rounded-full bg-primary-blue text-white mt-4"
          handleclick={() => setIsopen(true)}
          rightIcon="/right-arrow.svg"
        />
        </div>
      </div>
    </div>
  );
};

export default Carcard;

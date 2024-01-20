"use client";

import { CustombtnProps } from "@/types";
import Image from "next/image"

const Custombtn = ({title,containerstyle,handleclick,btnType,rightIcon}:CustombtnProps) => {
  return (
    <>
    <button
    disabled={false}
    type={btnType||"button"}
    className={`custom-btn ${containerstyle}`}
    onClick={handleclick  }
    >
       <span className={`flex-1`}>
       {title}
       
       </span>
       {rightIcon &&(
        <div className="relative w-6 h-6 ">
        <Image
          src="/right-arrow.svg"
          alt="arrow"
          layout="fill"
          className="object-contain"/>
        </div>
       )}
    </button>
    </>
  )
}

export default Custombtn
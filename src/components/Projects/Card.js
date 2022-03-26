import React, { useState, useEffect } from 'react'
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Card = ({ current }) => {
  const [isHover, setHover] = useState('hidden');

  return (
    <div
      onMouseOver={e => e.target && setHover('flex')}
      onMouseOut={e => e.target && setHover('hidden')}
      className="bg-gray-700 text-gray-200 relative rounded-2xl items-stretch col-span-1 row-span-3 hover:bg-sky-800 hover:text-white"
    >
      <div className="flex justify-around">
        <div>{`${current.name}`}</div>
        <div>{`${current.type}`}</div>
      </div>
      {current.description && <div className={`${isHover} absolute z-10 bg-slate-900 h-[84%] p-5 items-center`}>{`Description: ${current.description}`}</div>}
      {current.img && (<Image src={current.img} alt={current.name} className="rounded-2xl" width="420rem" height="260rem" />)}
      <div className="flex justify-around content-end">
        <div><a target="_blank" className='underline' href={current.urlRepo} rel="noreferrer">Link repositório</a></div>
        {current.urlSite && (<div><a target="_blank" className='underline' href={current.urlSite} rel="noreferrer">Link site</a></div>)}
      </div>
    </div>
  )
}

export default Card;

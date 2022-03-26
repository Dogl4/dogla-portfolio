import React, { useState } from 'react'
import Image from "next/image";

const Card = ({ current }) => {
  const [isHover, setHover] = useState('hidden');
  const [isHoverBlock, setHoverBlock] = useState('hidden');

  return (
    <div
      onMouseOver={e => e.target && (setHover('flex'), setHoverBlock('block'))}
      onMouseOut={e => e.target && (setHover('hidden'), setHoverBlock('hidden'))}
      className="text-gray-200 relative rounded-2xl items-stretch col-span-1 row-span-3 hover:bg-opacity-70"
    >
      <div className={`${isHover} absolute p-1 z-30 bg-gray-500 w-[100%] rounded-t-2xl justify-around items-center`}>
        <div>{`${current.name}`}</div>
        <div>{`${current.type}`}</div>
      </div>
      {(current.description || current.categories)
        && <div className={`${isHover} absolute z-10 bg-gray-900 hover:bg-opacity-80 rounded-2xl h-[100%] items-center`}>
          <div className={`${isHoverBlock} px-4`}>
            {current.description && <p className='my-3'><strong>Descrição:</strong> {current.description}</p>}
            {current.categories && <p><strong>Tecnologias:</strong>{current.categories.map((e) => (` ${e},`))}</p>}
          </div>
        </div>}
      {current.img && (<Image src={current.img} alt={current.name} className="rounded-2xl" width="420rem" height="260rem" />)}
      <div className={`${isHover} absolute p-1 z-30 bottom-0 bg-gray-500 w-[100%] rounded-b-2xl justify-around content-end`}>
        <div><a target="_blank" className='underline' href={current.urlRepo} rel="noreferrer">Link repositório</a></div>
        {current.urlSite && (<div><a target="_blank" className='underline' href={current.urlSite} rel="noreferrer">Link site</a></div>)}
      </div>
    </div>
  )
}

export default Card;

import React from 'react'

export default function Button({label} : {label: string}) {
  return (
    <button className='bg-primary text-white font-bold py-2 px-4 rounded-full w-fit'>
        <span>{label}</span>
    </button>
  )
}

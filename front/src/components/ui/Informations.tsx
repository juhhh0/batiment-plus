import React from 'react'

export default function Informations({data} : {data: any}) {
  return (
    <ul className="flex flex-col">
    <li>
      <span className="font-semibold">Adresse : </span>
      {data.adress}
    </li>
    <li>
      <span className="font-semibold">Email : </span>
      {data.email}
    </li>
    <li>
      <span className="font-semibold">Téléphone : </span>
      {data.phone}
    </li>
  </ul>
  )
}

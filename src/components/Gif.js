import React from 'react'
import './Gif.css'

export default function Gif ({ title, id, url }) {
  return (
    <div className='Gif'>
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </div>
  )
}
import React from 'react'

type Header = {
  readonly text: string;
}

function Header2({ text }: Header) {
  return (
    <h2 className='text-[15vw] leading-[1] tracking-tighter mb-[-.1em] uppercase'>{text}</h2>
  )
}

export default Header2
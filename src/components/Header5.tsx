import React from 'react'
import { spectralBridgeRegular } from '@/fonts/font'

type Header = {
  readonly text: string;
}

function Header5({ text }: Header) {
  return (
    <h2 className={`${spectralBridgeRegular.className} text-[8vw] md:text-[5vw] leading-[1]`}>{text}</h2>
  )
}

export default Header5
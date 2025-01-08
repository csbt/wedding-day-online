import React, { FC } from 'react'
import Image from 'next/image'

type Props = {}

const Logo: FC<Props> = () => {
  return (
    <div className='flex items-start gap-2 cursor-pointer'>
      <h1 className='font-vibes font-bold text-3xl sm:text-4xl md:text-6xl font-script mb-2 md:mb-4 pb-0 dark:text-white'>
        Wedding<span className='text-primary'>ᥫᩣday</span>
      </h1>
      <Image
        src='/static/images/logo/butterfly.png'
        alt='Logo'
        width={50}
        height={50}
      />
    </div>
  )
}

export default Logo

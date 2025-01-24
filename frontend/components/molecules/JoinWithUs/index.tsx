import { motion } from 'framer-motion'
import React, { FC } from 'react'
type Props = {}

const JoinWithUs: FC<Props> = () => {
  return (
    <div
      className='bg-pink-100 p-8  shadow-lg  h-[300px] flex items-center justify-center flex-col gap-4'
      style={{
        background: `url('https://wpocean.com/html/tf/mylove-live/assets/images/cta2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h2 className='text-3xl font-bold mb-4 text-primary'>
        Lets Celebrate Your Love
      </h2>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        className='bg-primary-foreground  px-4 py-2 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300'
      >
        Join With Us
      </motion.button>
    </div>
  )
}

export default JoinWithUs

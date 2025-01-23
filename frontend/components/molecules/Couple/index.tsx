import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram } from 'lucide-react'
type Props = {
  bride: {
    name: string
    avatar: string
    bio: string
    socials: {
      facebook?: string
      instagram?: string
    }
  }
  groom: {
    name: string
    avatar: string
    bio: string
    socials: {
      facebook?: string
      instagram?: string
    }
  }
}

const Couple: FC<Props> = ({ bride, groom }) => {
  const avatarAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  }

  const socialIconClass =
    'w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 hover:text-white'

  return (
    <section className='max-w-7xl mx-auto px-4 py-8 md:py-16 '>
      <div className='flex flex-col gap-16'>
        {/* Groom Section */}
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-16'>
          <div className='md:w-5/12 flex justify-end'>
            <motion.div
              className='relative w-[340px] h-[340px]'
              initial={avatarAnimation.initial}
              animate={avatarAnimation.animate}
              transition={avatarAnimation.transition}
            >
              <img
                src={groom.avatar}
                alt={groom.name}
                className='w-full h-full rounded-full object-cover border-8 border-white shadow-lg'
              />
            </motion.div>
          </div>
          <div className='md:w-7/12'>
            <h2 className='text-4xl font-great-vibes mb-6 text-center md:text-left'>
              {groom.name}
            </h2>
            <p className='text-gray-700 leading-relaxed mb-6'>{groom.bio}</p>
            <div className='flex gap-4 justify-center md:justify-start'>
              {groom.socials.facebook && (
                <a
                  href={groom.socials.facebook}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`${socialIconClass} border-primary hover:bg-primary`}
                >
                  <Facebook className='w-5 h-5' />
                </a>
              )}
              {groom.socials.instagram && (
                <a
                  href={groom.socials.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`${socialIconClass} border-primary hover:bg-primary`}
                >
                  <Instagram className='w-5 h-5' />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bride Section */}
        <div className='flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16'>
          <div className='md:w-5/12 flex justify-start'>
            <motion.div
              className='relative w-[340px] h-[340px]'
              initial={avatarAnimation.initial}
              animate={avatarAnimation.animate}
              transition={avatarAnimation.transition}
            >
              <img
                src={bride.avatar}
                alt={bride.name}
                className='w-full h-full rounded-full object-cover border-8 border-white shadow-lg'
              />
            </motion.div>
          </div>
          <div className='md:w-7/12 md:text-right'>
            <h2 className='text-4xl font-great-vibes mb-6 text-center md:text-right'>
              {bride.name}
            </h2>
            <p className='text-gray-700 leading-relaxed mb-6'>{bride.bio}</p>
            <div className='flex gap-4 justify-center md:justify-end'>
              {bride.socials.facebook && (
                <a
                  href={bride.socials.facebook}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`${socialIconClass} border-primary hover:bg-primary`}
                >
                  <Facebook className='w-5 h-5' />
                </a>
              )}
              {bride.socials.instagram && (
                <a
                  href={bride.socials.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`${socialIconClass} border-primary hover:bg-primary`}
                >
                  <Instagram className='w-5 h-5' />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Couple

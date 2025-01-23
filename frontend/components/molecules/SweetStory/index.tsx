import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { Fragment } from 'react'

interface StoryEvent {
  title: string
  date: string
  description: string
  image: string
}

const storyEvents: StoryEvent[] = [
  {
    title: 'First Meet',
    date: 'January 15, 2020',
    description:
      'We first met at a coffee shop downtown. It was a chance encounter that changed our lives forever.',
    image: 'https://wpocean.com/html/tf/mylove-live/assets/images/story/1.jpg'
  },
  {
    title: 'First Date',
    date: 'February 14, 2020',
    description:
      'Our first official date was magical. We knew this was the beginning of something special.',
    image: 'https://wpocean.com/html/tf/mylove-live/assets/images/story/2.jpg'
  },
  {
    title: 'Proposal',
    date: 'December 25, 2021',
    description:
      'Under the Christmas lights, I got down on one knee and asked the most important question.',
    image: 'https://wpocean.com/html/tf/mylove-live/assets/images/story/3.jpg'
  },
  {
    title: 'Engagement',
    date: 'March 1, 2022',
    description:
      'We celebrated our engagement with family and friends, planning our future together.',
    image: 'https://wpocean.com/html/tf/mylove-live/assets/images/story/4.jpg'
  }
]

const SweetStory = () => {
  return (
    <div className='container mx-auto px-4 py-16'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-5xl font-bold text-center mb-16'
      >
        Our Sweet Story
      </motion.h1>

      <div className='relative'>
        {/* Timeline vertical line - ẩn trên mobile và tablet */}
        <div className='absolute left-1/2 transform -translate-x-1/2 h-[100%] w-1 bg-pink-200 -top-10 -bottom-10 hidden lg:block'></div>

        {storyEvents.map((event, index) => (
          <Fragment key={index}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='relative mb-16'
            >
              <div
                className={`flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className='w-full lg:w-[500px] bg-white p-8 rounded-lg shadow-lg border-8 border-pink-200 z-10 order-1 lg:order-none'
                >
                  <h3 className='text-3xl font-bold mb-4 text-pink-500'>
                    {event.title}
                  </h3>
                  <div className='flex items-center gap-2 mb-4 text-gray-600'>
                    <Calendar className='w-5 h-5' />
                    <span>{event.date}</span>
                  </div>
                  <p className='text-gray-700 leading-relaxed'>
                    {event.description}
                  </p>
                </motion.div>

                {/* Image */}
                <div
                  className={`relative w-full lg:w-auto ${
                    index % 2 === 0 ? 'lg:-mr-16' : 'lg:-ml-16'
                  } z-0 order-2 lg:order-none`}
                >
                  <div className='w-full lg:w-[500px] h-[400px] lg:h-[600px] overflow-hidden'>
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={500}
                      height={600}
                      className='object-cover w-full h-full'
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline dot - chỉ hiện trên desktop */}
            {index < storyEvents.length - 1 && (
              <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-400 rounded-full z-20 mb-16 hidden lg:block'></div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default SweetStory

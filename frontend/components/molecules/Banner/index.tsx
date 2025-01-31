import React, { FC, useState, useEffect } from 'react'
import Image from 'next/image'

type Props = {
  brideAndGroom?: {
    bride: string
    groom: string
  }
  weddingDate?: Date
}

const Banner: FC<Props> = ({
  brideAndGroom = {
    bride: 'Khánh Huyền',
    groom: 'Xuân Trường'
  },
  weddingDate = new Date('2025-03-09')
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    'https://wpocean.com/html/tf/mylove-live/assets/images/slider/s1.png',
  ]

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate.getTime() - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [weddingDate])

  // Image carousel logic
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(imageTimer)
  }, [])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center px-4'>
      <div className='max-w-7xl w-full mx-auto flex justify-between items-center flex-col md:flex-row'>
        {/* Left side - Names and Countdown */}
        <div className='flex-1 pr-8'>
          <div className='space-y-6'>
            {/* Names */}
            <div className='text-center'>
              <h1 className='text-6xl font-dancing-script mb-4'>
                {brideAndGroom.bride}
              </h1>
              <span className='text-4xl font-dancing-script'>&</span>
              <h1 className='text-6xl font-dancing-script mt-4'>
                {brideAndGroom.groom}
              </h1>
            </div>

            {/* Wedding Date Announcement */}
            <p className='text-center text-lg text-gray-600 mt-6'>
              Sẽ tổ chức lễ thành hôn vào
              <br />
              <span className='font-semibold'>{formatDate(weddingDate)}</span>
            </p>

            {/* Countdown */}
            <div className='flex justify-center space-x-6 mt-8'>
              <CountdownItem value={timeLeft.days} label='Ngày' />
              <CountdownItem value={timeLeft.hours} label='Giờ' />
              <CountdownItem value={timeLeft.minutes} label='Phút' />
              <CountdownItem value={timeLeft.seconds} label='Giây' />
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className='w-[420px] h-[556px] relative'>
          <Image
            src={images[currentImageIndex]}
            alt='Wedding couple'
            fill
            className='object-cover rounded-lg'
            priority
          />
        </div>
      </div>
    </div>
  )
}

// Countdown item component
const CountdownItem: FC<{ value: number; label: string }> = ({
  value,
  label
}) => (
  <div className='text-center'>
    <div className='bg-gray-100 dark:bg-gray-800 rounded-lg p-4'>
      <div className='text-3xl font-bold'>{value}</div>
      <div className='text-sm mt-1'>{label}</div>
    </div>
  </div>
)

export default Banner

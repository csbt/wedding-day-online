'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImage {
  id: number
  src: string
  width: number
  height: number
  alt: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://wpocean.com/html/tf/mylove-live/assets/images/portfolio/1.jpg',
    width: 600,
    height: 400,
    alt: 'Wedding moment 1'
  },
  {
    id: 2,
    src: 'https://wpocean.com/html/tf/mylove-live/assets/images/portfolio/2.jpg',
    width: 400,
    height: 600,
    alt: 'Wedding moment 2'
  },
  {
    id: 3,
    src: 'https://wpocean.com/html/tf/mylove-live/assets/images/portfolio/3.jpg',
    width: 400,
    height: 600,
    alt: 'Wedding moment 3'
  },
  {
    id: 4,
    src: 'https://wpocean.com/html/tf/mylove-live/assets/images/portfolio/4.jpg',
    width: 400,
    height: 600,
    alt: 'Wedding moment 4'
  },
  {
    id: 5,
    src: 'https://wpocean.com/html/tf/mylove-live/assets/images/portfolio/5.jpg',
    width: 400,
    height: 600,
    alt: 'Wedding moment 5'
  },
  {
    id: 6,
    src: 'https://wpocean.com/html/tf/mylove-live/assets/images/portfolio/6.jpg',
    width: 400,
    height: 600,
    alt: 'Wedding moment 6'
  },
  {
    id: 7,
    src: 'https://wpocean.com/html/tf/mylove-live/assets/images/portfolio/7.jpg',
    width: 400,
    height: 600,
    alt: 'Wedding moment 7'
  },
  {
    id: 8,
    src: 'https://wpocean.com/html/tf/mylove-live/assets/images/portfolio/8.jpg',
    width: 400,
    height: 600,
    alt: 'Wedding moment 8'
  }
  // ... thêm các ảnh khác với kích thước đa dạng
]

const CapturedMoment = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const handleNext = () => {
    if (!selectedImage) return
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage.id
    )
    const nextIndex = (currentIndex + 1) % galleryImages.length
    setSelectedImage(galleryImages[nextIndex])
  }

  const handlePrevious = () => {
    if (!selectedImage) return
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage.id
    )
    const previousIndex =
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    setSelectedImage(galleryImages[previousIndex])
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 20
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className='container mx-auto px-4 py-16'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-5xl font-bold text-center mb-16'
      >
        Captured Moments
      </motion.h1>

      {/* Gallery Grid */}
      <motion.div
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            className='relative cursor-pointer group'
            custom={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            onClick={() => setSelectedImage(image)}
          >
            <div className='aspect-[3/4] relative overflow-hidden rounded-lg shadow-lg'>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes='(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw'
                className='object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300' />

              {/* Image title on hover */}
              <div className='absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent'>
                <h3 className='text-sm font-medium truncate'>{image.alt}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for Image Detail */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center'
            onClick={() => setSelectedImage(null)}
          >
            {/* Navigation buttons - Tách ra khỏi container ảnh */}
            <button
              className='fixed left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white hover:text-pink-400 transition-all duration-300 backdrop-blur-sm'
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
            >
              <ChevronLeft size={32} />
            </button>

            <button
              className='fixed right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white hover:text-pink-400 transition-all duration-300 backdrop-blur-sm'
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
            >
              <ChevronRight size={32} />
            </button>

            {/* Image container */}
            <div
              className='relative max-w-[90vw] max-h-[90vh] bg-white/5 p-4 rounded-lg backdrop-blur-sm'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className='absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white hover:text-pink-400 transition-all duration-300 backdrop-blur-sm'
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>

              {/* Image */}
              <motion.div
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className='relative'
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={selectedImage.width}
                  height={selectedImage.height}
                  className='max-h-[80vh] w-auto object-contain rounded-lg'
                />

                {/* Image info */}
                <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white rounded-b-lg'>
                  <h3 className='text-xl font-semibold mb-2'>
                    {selectedImage.alt}
                  </h3>
                  <p className='text-sm text-gray-200'>
                    {`${selectedImage.width} x ${selectedImage.height}`}
                  </p>
                </div>
              </motion.div>

              {/* Counter */}
              <div className='absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/80 font-medium'>
                {`${
                  galleryImages.findIndex(
                    (img) => img.id === selectedImage.id
                  ) + 1
                } / ${galleryImages.length}`}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CapturedMoment

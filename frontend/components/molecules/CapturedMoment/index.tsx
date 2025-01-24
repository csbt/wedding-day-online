'use client'
import { Gallery } from '@/components/atoms/react-grid-gallery'
import React, { FC, useState } from 'react'
import 'react-image-lightbox/style.css'

const images = [
  {
    src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    width: 320,
    height: 174,
    isSelected: true,
    caption: 'After Rain (Jeshu John - designerspics.com)'
  },
  {
    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    width: 320,
    height: 212,
    tags: [
      { value: 'Ocean', title: 'Ocean' },
      { value: 'People', title: 'People' }
    ],
    alt: 'Boats (Jeshu John - designerspics.com)'
  },
  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    width: 320,
    height: 212
  }
]

type Props = {}

const CapturedMoment: FC<Props> = ({}) => {
  const [index, setIndex] = useState(-1)

  const currentImage: any = images[index] as any
  const nextIndex = (index + 1) % images.length
  const nextImage: any = images[nextIndex] || currentImage
  const prevIndex = (index + images.length - 1) % images.length
  const prevImage: any = images[prevIndex] || currentImage

  const handleClick = (index: number) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
    </div>
  )
}

export default CapturedMoment

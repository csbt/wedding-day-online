import Logo from '@/components/atoms/Logo'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React, { FC, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

type Props = {}
const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'WEDDING', href: '/wedding' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'RSVP', href: '/rsvp' },
  { name: 'PAGES', href: '/pages' },
  { name: 'BLOG', href: '/blog' }
]

const Menu1: FC<Props> = ({}) => {
  const { theme, setTheme } = useTheme()
  console.log(`🚀🚀🚀 ~ theme:`, theme)
  const [isOpen, setIsOpen] = React.useState(false)
  useEffect(() => {
    setTheme('pink')
  }, [])
  return (
    <header
      className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
    '
    >
      <div className='container flex h-20 items-center max-w-container p-0 sm:px-4 sm:py-2 md:px-4 md:py-4 lg:px-4 lg:py-4 xl:px-4 xl:py-4'>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
    </header>
  )
}

export default Menu1

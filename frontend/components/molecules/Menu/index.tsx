import Logo from '@/components/atoms/Logo'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React, { FC, useEffect } from 'react'
import { Menu as MenuIcon, X as XIcon } from 'lucide-react'
import { motion } from 'framer-motion'

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

const Menu: FC<Props> = ({}) => {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  useEffect(() => {
    setTheme('pink')
  }, [])
  return (
    <header
      className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
    '
    >
      <div className='container flex h-20 items-center justify-between max-w-container p-0'>
        <Link href='/'>
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center gap-8'>
          {navigation.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className='text-sm font-medium transition-colors hover:text-primary'
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='ghost' size='icon'>
              <MenuIcon className='h-6 w-6' />
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
            <motion.nav
              className='flex flex-col gap-4 mt-8'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className='block py-2 text-lg font-medium transition-colors hover:text-primary'
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Menu

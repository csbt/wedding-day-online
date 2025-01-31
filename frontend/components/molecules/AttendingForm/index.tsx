'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Heart, Mail, User, Users } from 'lucide-react'

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  isAttending: z.enum(['yes', 'no'], {
    required_error: 'Please select whether you are attending'
  }),
  guestCount: z.number().min(0).max(5, 'Maximum 5 additional guests')
})

type FormData = z.infer<typeof formSchema>

const AttendingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guestCount: 0,
      isAttending: 'yes'
    }
  })

  const isAttending = watch('isAttending')

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // API call here
      console.log(data)
      // Show success message
    } catch (error) {
      // Show error message
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='container mx-auto px-4 py-20'>
      <div className='max-w-xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 md:p-12 border border-[#960018]'
        >
          {/* Title */}
          <div className='text-center mb-12'>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='relative inline-block'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif'>
                Are You Attending?
              </h2>
              <div className='absolute -right-8 -top-6'>
                <Heart
                  className='text-[#960018] w-6 h-6 animate-pulse'
                  fill='currentColor'
                />
              </div>
            </motion.div>
            <p className='text-gray-500 text-sm md:text-base max-w-md mx-auto'>
              Please let us know if you can make it to our special day. We're
              excited to celebrate with you!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
            {/* Name Field */}
            <div className='relative group'>
              <label className='block text-sm font-medium text-gray-600 mb-2'>
                Your Name
              </label>
              <div className='relative'>
                <User className='absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#960018] transition-colors' />
                <input
                  {...register('name')}
                  className='w-full pl-8 pr-4 py-3 bg-transparent border-0 border-b-2 border-gray-200 
                    focus:ring-0 focus:border-[#960018] transition-colors placeholder:text-gray-300
                    focus:outline-none'
                  placeholder='Enter your name'
                />
              </div>
              {errors.name && (
                <p className='mt-2 text-sm text-[#960018] flex items-center gap-1'>
                  <span className='inline-block w-1 h-1 bg-[#960018] rounded-full'></span>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className='relative group'>
              <label className='block text-sm font-medium text-gray-600 mb-2'>
                Email Address
              </label>
              <div className='relative'>
                <Mail className='absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#960018] transition-colors' />
                <input
                  {...register('email')}
                  type='email'
                  className='w-full pl-8 pr-4 py-3 bg-transparent border-0 border-b-2 border-gray-200 
                    focus:ring-0 focus:border-[#960018] transition-colors placeholder:text-gray-300
                    focus:outline-none'
                  placeholder='Enter your email'
                />
              </div>
              {errors.email && (
                <p className='mt-2 text-sm text-[#960018] flex items-center gap-1'>
                  <span className='inline-block w-1 h-1 bg-[#960018] rounded-full'></span>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Attendance Radio */}
            <div className='space-y-3'>
              <label className='block text-sm font-medium text-gray-600 mb-2'>
                Will you be attending?
              </label>
              <div className='flex flex-col sm:flex-row gap-4'>
                <label
                  className='flex items-center p-4 border border-gray-100 rounded-xl cursor-pointer 
                  hover:border-pink-100 transition-colors bg-white/50 hover:bg-white/80'
                >
                  <input
                    {...register('isAttending')}
                    type='radio'
                    value='yes'
                    className='w-4 h-4 text-[#960018] focus:ring-0 border-gray-300'
                  />
                  <span className='ml-3 text-gray-700'>
                    Yes, I will be there
                  </span>
                </label>
                <label
                  className='flex items-center p-4 border border-gray-100 rounded-xl cursor-pointer 
                  hover:border-pink-100 transition-colors bg-white/50 hover:bg-white/80'
                >
                  <input
                    {...register('isAttending')}
                    type='radio'
                    value='no'
                    className='w-4 h-4 text-[#960018] focus:ring-0 border-gray-300'
                  />
                  <span className='ml-3 text-gray-700'>
                    Sorry, I can't come
                  </span>
                </label>
              </div>
            </div>

            {/* Guest Count */}
            <AnimatePresence>
              {isAttending === 'yes' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className='relative group'
                >
                  <label className='block text-sm font-medium text-gray-600 mb-2'>
                    Additional Guests
                  </label>
                  <div className='relative'>
                    <Users className='absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#960018] transition-colors' />
                    <input
                      {...register('guestCount', { valueAsNumber: true })}
                      type='number'
                      min='0'
                      max='5'
                      className='w-full pl-8 pr-4 py-3 bg-transparent border-0 border-b-2 border-gray-200 
                        focus:ring-0 focus:border-[#960018] transition-colors placeholder:text-gray-300
                        focus:outline-none'
                      placeholder='Number of additional guests'
                    />
                  </div>
                  {errors.guestCount && (
                    <p className='mt-2 text-sm text-[#960018] flex items-center gap-1'>
                      <span className='inline-block w-1 h-1 bg-[#960018] rounded-full'></span>
                      {errors.guestCount.message}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-gradient-to-r from-[#960018] to-[#7b1113] text-white py-4 rounded-xl font-medium 
                hover:from-[#960018] hover:to-[#7b1113] transition-all duration-300 
                disabled:opacity-50 disabled:cursor-not-allowed
                shadow-lg shadow-[#960018] hover:shadow-[#7b1113]'
            >
              {isSubmitting ? (
                <span className='flex items-center justify-center gap-2'>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    className='w-5 h-5 border-2 border-white border-t-transparent rounded-full inline-block'
                  />
                  Sending...
                </span>
              ) : (
                'Send RSVP'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default AttendingForm

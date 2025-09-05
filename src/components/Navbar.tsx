import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'
import { motion } from 'framer-motion'

interface NavigationItem {
  name: string
  href: string
}

const navigation: NavigationItem[] = [
  { name: 'About', href: '/#about' },
  { name: 'Work Experience', href: '/#experience' },
  { name: 'Side Projects', href: '/#side_projects' },
  { name: 'Contact', href: '/#contact' },
]

export function Navbar(): JSX.Element {
  return (
    <Popover>
      <motion.div
        className='fixed backdrop-blur py-4 top-0 z-40 w-full px-4 sm:px-6 lg:px-8'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <nav
          className='container px-5 sm:px-8 xl:px-0 text-lg font-medium max-w-5xl relative flex flex-row items-center justify-between sm:h-10 '
          aria-label='Global'
        >
          <div className='flex flex-shrink-0 flex-grow items-center lg:flex-grow-0'>
            <div className='flex w-full items-center justify-between md:w-auto '>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link legacyBehavior href='/'>
                  <a className='hover:bg-hoverColor rounded p-2 text-2xl font-medium'>
                    {'{ Ali }'}
                  </a>
                </Link>
              </motion.div>
              <div className='-mr-2 flex items-center md:hidden'>
                <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-hoverColor'>
                  <span className='sr-only'>Open main menu</span>
                  <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className='hidden md:ml-10 md:block md:space-x-4 md:pr-2'>
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className='font-semibold text-silver hover:bg-hoverColor rounded p-2'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                whileHover={{ scale: 1.05, color: '#06b6d4' }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </nav>
      </motion.div>

      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='container px-5 sm:px-8 xl:px-0 max-w-5xl absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden'
        >
          <div className='overflow-hidden rounded-lg bg-darkTheme shadow-md ring-1 ring-black ring-opacity-5'>
            <div className='flex items-center justify-between px-5 pt-4'>
              <div>
                <a className='hover:bg-hoverColor rounded p-2 text-2xl h-8 w-auto cursor-pointer font-medium'>
                  {'{ Ali }'}
                </a>
              </div>
              <div className='-mr-2'>
                <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-hoverColor'>
                  <span className='sr-only'>Close main menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='block rounded-md px-3 py-2 text-base font-semibold text-silver  hover:bg-hoverColor'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar

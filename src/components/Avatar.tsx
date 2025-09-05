import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

export function Avatar(): JSX.Element {
  return (
    <section className='container px-5 sm:px-8 xl:px-0 text-lg max-w-5xl flex min-h-screen flex-col items-center justify-center space-y-6'>
      <div className='flex flex-col items-center mt-10 md:mt-0'>
        <div className='flex flex-col items-center'>
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.5,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 5,
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
            }}
            className='relative'
          >
            <Image
              src='/prof.jpg'
              alt='profile image'
              width={300}
              height={300}
              quality={100}
              objectFit='cover'
              className='rounded-full overflow-hidden mb-4'
            />
            <motion.div
              className='absolute inset-0 rounded-full'
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
          <motion.div
            className='my-3'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.h1
              className='text-2xl sm:text-4xl text-center font-medium'
              initial={{ opacity: 0, x: -50, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                delay: 1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Hi, I&apos;m{' '}
              <motion.span
                className='font-bold'
                animate={{
                  textShadow: [
                    '0 0 0px #06b6d4',
                    '0 0 20px #06b6d4',
                    '0 0 0px #06b6d4',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{
                  scale: 1.1,
                  color: '#06b6d4',
                  transition: { duration: 0.3 },
                }}
              >
                Ali Monapour
              </motion.span>
              !
            </motion.h1>
            <motion.h2
              className='text-2xl m-2 text-center font-medium'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              👉 My smile never fades 😊
            </motion.h2>
            <motion.h1
              className='text-xl sm:text-3xl m-2 text-center text-tahiti italic capitalize font-medium'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              Brings ideas to life with code.
            </motion.h1>
            <motion.h2
              className='text-2xl sm:text-3xl m-2 text-center font-medium'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              I am a{' '}
              <motion.span
                className='text-xl sm:text-4xl sm:font-bold'
                whileHover={{ scale: 1.1, color: '#06b6d4' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Front-End developer.
              </motion.span>
            </motion.h2>
          </motion.div>
        </div>
        <motion.div
          className='flex'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              legacyBehavior
              href='https://www.linkedin.com/in/alimonapour/'
            >
              <a
                className='faIcon transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 hover:text-tahiti'
                target='_blank'
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{
                    fontSize: 50,
                    margin: 5,
                  }}
                />
              </a>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link legacyBehavior href='https://github.com/alimonapour/'>
              <a
                className='faIcon transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 hover:text-tahiti'
                target='_blank'
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ fontSize: 50, margin: 5 }}
                />
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Avatar

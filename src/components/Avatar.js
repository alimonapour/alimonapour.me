import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export function Avatar() {
  return (
    <section className='container px-5 sm:px-8 xl:px-0 text-lg max-w-5xl flex min-h-screen flex-col items-center justify-center space-y-6'>
      <div className='flex flex-col items-center mt-10 md:mt-0'>
        <div className='flex flex-col items-center'>
          <Image
            src='/prof.jpg'
            alt='profile image'
            width={300}
            height={300}
            quality={100}
            objectFit='cover'
            className='rounded-full overflow-hidden mb-4'
          />
          <div className='my-3'>
            <h1 className='text-2xl sm:text-4xl text-center '>
              Hi, I&apos;m{' '}
              <span className='text-brand font-bold hover:animate-pulse'>
                Ali Monapour
              </span>
              !
            </h1>
            <h2 className='text-2xl m-2 text-center hover:animate-bounce'>
              👉 My smile never fades 😊
            </h2>
            <h1 className='text-xl sm:text-3xl m-2 text-center text-tahiti italic capitalize '>
              Brings ideas to life with code.
            </h1>
            <h2 className='text-2xl sm:text-3xl m-2 text-center'>
              I am a{' '}
              <span className='text-xl sm:text-4xl sm:font-bold'>
                Front-End developer.
              </span>
            </h2>
          </div>
        </div>
        <div className='flex'>
          <Link href='https://www.linkedin.com/in/alimonapour/'>
            <a
              className='faIcon transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'
              target='_blank'
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{
                  fontSize: 50,
                  color: '#fff',
                  margin: 5,
                }}
              />
            </a>
          </Link>
          <Link href='https://github.com/alimonapour'>
            <a
              className='faIcon transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'
              target='_blank'
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ fontSize: 50, color: '#fff', margin: 5 }}
              />
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Avatar

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export function FooterInfo() {
  return (
    <>
      <div id='contact' className='flex flex-col my-3 items-center'>
        <h1 className=' text-3xl m-3 text-center font-semibold'>
          Get in Touch
        </h1>

        <h2 className='text-xl sm:text-2xl m-3 text-center font-medium'>
          Currently, I&apos;m seeking new opportunities, and my inbox is always
          open. <br />
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </h2>
        <button
          className='box-content h-10 w-32 transition ease-in-out delay-150 bg-tahiti text-bermuda hover:bg-bermuda hover:text-tahiti hover:-translate-y-1 hover:scale-100 duration-300 p-2 mb-3 sm:ml-2 text-2xl font-extrabold rounded-lg my-5 ring-metal ring-1'
          onClick={() => (window.location = 'mailto:alimonapour@gmail.com')}
        >
          Say Hi
        </button>
      </div>

      <div className='flex'>
        <Link href='https://www.linkedin.com/in/alimonapour/'>
          <a
            className='faIcon transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-200 hover:text-tahiti'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                fontSize: 50,

                margin: 10,
              }}
            />
          </a>
        </Link>
        <Link href='https://github.com/alimonapour'>
          <a
            className='faIcon transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-200 hover:text-tahiti'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: 50, margin: 10 }}
            />
          </a>
        </Link>
      </div>
      <div className='flex flex-col items-center font-medium'>
        <h3 className='text-lg sm:text-2xl m-3 italic text-center '>
          Powered by
          <a
            href='https://nextjs.org/'
            target='_blank'
            rel='noreferrer'
            className='px-2 hover:bg-hoverColor rounded p-1'
          >
            Next JS
          </a>
          &&
          <a
            href='https://tailwindcss.com/'
            target='_blank'
            rel='noreferrer'
            className='px-2 hover:bg-hoverColor rounded p-1'
          >
            Tailwind CSS.
          </a>
        </h3>
        <h3 className='text-2xl m-3 italic text-center'>August 2022.</h3>
      </div>
    </>
  )
}

export default FooterInfo

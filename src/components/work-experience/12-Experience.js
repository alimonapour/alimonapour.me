import Link from 'next/link'

export function TwelveGroupExperience() {
  return (
    <div className='my-3 ml-3 border-t-2 font-medium'>
      <h2 className='w-fit py-4 rounded text-2xl sm:text-4xl '>
        Front-End Developer @ Twelve Group
      </h2>
      <h3 className='text-xl sm:text-2xl text-left italic my-3'>
        <span>May 2020 - June 2023 (3 years 2 months) in Tabriz, Iran</span>{' '}
      </h3>
      <ul className='list-disc text-xl sm:text-2xl py-3 ml-5'>
        <li>
          Developed multiple interactive and browser-compatible applications
          using <span className='font-semibold text-tahiti'>HTML5</span>,{' '}
          <span className='font-semibold text-tahiti'>CSS3</span>, and{' '}
          <span className='font-semibold text-tahiti'>
            TypeScript/JavaScript (React, Redux)
          </span>
          .
        </li>
        <li>
          Experience with integration testing using{' '}
          <span className='font-semibold text-tahiti'>Cypress</span>, and
          covering edge cases with unit tests using{' '}
          <span className='font-semibold text-tahiti'>
            React Testing Library
          </span>{' '}
          and <span className='font-semibold text-tahiti'>Jest</span>.
        </li>
        <li>
          Designed and implemented custom solutions to complex front-end
          challenges, including implementing real-time updates, and optimizing
          page load times.
        </li>
        <li>
          Actively participated in code reviews, offering constructive feedback
          and ensuring code quality, leading to fewer bugs and improved overall
          product stability.
        </li>
        <li>
          Utilized and implemented{' '}
          <span className='font-semibold text-tahiti'>attractive</span>,{' '}
          <span className='font-semibold text-tahiti'>responsive</span>, and{' '}
          <span className='font-semibold text-tahiti'> mobile-friendly</span>{' '}
          website contexts and elements.
        </li>

        <li>
          Mentored a junior team member on developing React applications,
          developing a test-driven mindset, and dealing with errors.
        </li>

        <li>
          Developed Pixel Perfect UIs by converting the design into{' '}
          <span className='font-semibold text-tahiti'>Tailwind CSS</span>
          config files.
        </li>
        <li>
          The app routers are managed by{' '}
          <span className='font-semibold text-tahiti'>React Router</span> and
          receive data from the{' '}
          <span className='font-semibold text-tahiti'>RESTful API</span>.
        </li>
      </ul>
      <div className='flex flex-col py-3 '>
        <h3 className='text-xl sm:text-2xl'>
          Some projects as part of my job, including:
        </h3>
        <div className='list-none text-lg ml-6 my-2 py-2 flex flex-col items-center sm:flex-row sm:justify-around sm:items-center'>
          <Link href='https://pingonio.com/'>
            <a
              className='w-60 sm:w-auto font-extrabold transition ease-in-out delay-150 bg-tahiti text-bermuda hover:bg-bermuda hover:text-tahiti hover:-translate-y-1 hover:scale-100  duration-300 p-2 mb-3 sm:mb-0 rounded-lg text-center ring-metal ring-1'
              target='_blank'
            >
              pingonio.com
            </a>
          </Link>
          <Link href='https://kangonio.com/'>
            <a
              className='w-60 sm:w-auto font-extrabold transition ease-in-out delay-150 bg-tahiti text-bermuda hover:bg-bermuda hover:text-tahiti hover:-translate-y-1 hover:scale-100  duration-300 p-2 mb-3 sm:mb-0 rounded-lg text-center ring-metal ring-1'
              target='_blank'
            >
              kangonio.com
            </a>
          </Link>

          <Link href='https://zemnekhedmat.org/'>
            <a
              className='w-60 sm:w-auto font-extrabold transition ease-in-out delay-150 bg-tahiti text-bermuda hover:bg-bermuda hover:text-tahiti hover:-translate-y-1 hover:scale-100  duration-300 p-2 mb-3 sm:mb-0 rounded-lg text-center ring-metal ring-1'
              target='_blank'
            >
              zemnekhedmat.org
            </a>
          </Link>
          <Link href='https://www.missone.ir/'>
            <a
              className='w-60 sm:w-auto font-extrabold transition ease-in-out delay-150 bg-tahiti text-bermuda hover:bg-bermuda hover:text-tahiti hover:-translate-y-1 hover:scale-100  duration-300 p-2 mb-3 sm:mb-0 rounded-lg text-center ring-metal ring-1'
              target='_blank'
            >
              missone.ir
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TwelveGroupExperience

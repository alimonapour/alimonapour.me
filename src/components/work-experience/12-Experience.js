import Link from 'next/link'

export function TwelveGroupExperience() {
  return (
    <div className='my-3 ml-3 font-medium'>
      <h2 className='w-fit rounded text-2xl sm:text-4xl '>
        Front-End Developer @ Twelve Group
      </h2>
      <h3 className='text-xl sm:text-2xl text-left italic my-3'>
        <span>November 2018 - Present (4 years 2 months) in Tabriz, Iran</span>{' '}
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
          Worked in an agile, collaborative environment to receive design
          requirements, and test applications (Backend, DevOps, etc).
        </li>
        <li>
          Created reusable components that can be used across multiple projects
          as well as optimized code for performance in large-scale applications.
        </li>
        <li>
          Developed a responsive design with{' '}
          <span className='font-semibold text-tahiti'>CSS Grid</span> and{' '}
          <span className='font-semibold text-tahiti'>CSS Flexbox</span> that
          allowed cross-platform accessibility to the website on any device with
          primary use on mobile.
        </li>
        <li>
          Utilized and implemented{' '}
          <span className='font-semibold text-tahiti'>attractive</span>,{' '}
          <span className='font-semibold text-tahiti'>responsive</span>, and{' '}
          <span className='font-semibold text-tahiti'> mobile-friendly</span>{' '}
          website contexts and elements.
        </li>
        <li>
          Translated user requirements into scalable code, developed prototypes
          conducted wireframing activities and ensured alignment with client
          business specifications.
        </li>
        <li>
          Implemented{' '}
          <span className='font-semibold text-tahiti'>unit testing</span> with{' '}
          <span className='font-semibold text-tahiti'>Jest</span>,{' '}
          <span className='font-semibold text-tahiti'>integration testing</span>{' '}
          with{' '}
          <span className='font-semibold text-tahiti'>
            React Testing Library
          </span>
          , and{' '}
          <span className='font-semibold text-tahiti'>end-to-end testing</span>{' '}
          with <span className='font-semibold text-tahiti'>Cypress</span>.
        </li>
        <li>
          Produced multiple visual elements of web applications by translating
          UI/UX design wireframes into code, producing high-quality markup using{' '}
          <span className='font-semibold text-tahiti'>HTML5</span> and{' '}
          <span className='font-semibold text-tahiti'>CSS3</span>.
        </li>
        <li>Assisted in building reusable code for future use.</li>
        <li>Developed new features to enhance user experience.</li>
        <li>
          Used{' '}
          <span className='font-semibold text-tahiti'>
            Git version control system
          </span>{' '}
          to manage source code changes and collaborate with other developers on
          tasks when needed.
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

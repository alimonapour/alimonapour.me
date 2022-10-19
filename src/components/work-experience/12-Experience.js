import Link from 'next/link'

export function TwelveGroupExperience() {
  return (
    <div className='my-3 ml-3 font-medium'>
      <h2 className='w-fit rounded text-2xl sm:text-4xl '>
        Front-End Developer @ Twelve Group
      </h2>
      <h3 className='text-xl sm:text-2xl text-left italic my-3'>
        <span>November 2017 - Present (4 years 10 months) in Tabriz, Iran</span>{' '}
      </h3>
      <ul className='list-disc text-xl sm:text-2xl py-3 ml-5'>
        <li>
          Developed applications using React while managing the state through
          Redux.
        </li>
        <li>
          Worked in agile, collaborative environment to receive design
          requirements, and test applications.
        </li>
        <li>
          Created a Responsive User Experience with CSS Flexbox that allowed
          cross-platform accessibility to the website on any device with primary
          use on mobile.
        </li>
        <li>
          Utilized and implemented attractive, responsive, and mobile-friendly
          website contexts and elements.
        </li>
        <li>Assisted in building reusable code for future use.</li>
        <li>Validated user input before submitting to the back-end.</li>
        <li>Developed new features to enhance user experience.</li>
        <li>
          Write unit tests, integration tests and end to end tests using
          Cypress.
        </li>
        <li>
          The app routers are managed by React Router and receive data from the
          RESTful API.
        </li>
      </ul>
      <div className='flex flex-col py-3 '>
        <h3 className='text-xl sm:text-2xl'>
          Some projects as part of my job, including:
        </h3>
        <div className='list-none text-lg ml-6 my-2 py-2 flex flex-col items-center sm:flex-row sm:justify-around sm:items-center'>
          <Link href='https://kangonio.com/'>
            <a
              className='w-60 sm:w-auto font-extrabold transition ease-in-out delay-150 bg-tahiti text-bermuda hover:bg-bermuda hover:text-tahiti hover:-translate-y-1 hover:scale-100  duration-300 p-2 mb-3 sm:mb-0 rounded-lg text-center'
              target='_blank'
            >
              kangonio.com
            </a>
          </Link>

          <Link href='https://zemnekhedmat.org/'>
            <a
              className='w-60 sm:w-auto font-extrabold transition ease-in-out delay-150 bg-tahiti text-bermuda hover:bg-bermuda hover:text-tahiti hover:-translate-y-1 hover:scale-100  duration-300 p-2 mb-3 sm:mb-0 rounded-lg text-center'
              target='_blank'
            >
              zemnekhedmat.org
            </a>
          </Link>
          <Link href='https://www.missone.ir/'>
            <a
              className='w-60 sm:w-auto font-extrabold transition ease-in-out delay-150 bg-tahiti text-bermuda hover:bg-bermuda hover:text-tahiti hover:-translate-y-1 hover:scale-100  duration-300 p-2 mb-3 sm:mb-0 rounded-lg text-center'
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

export function Bookstory(): JSX.Element {
  return (
    <div className='my-3 ml-3 font-medium border-t-2 py-4'>
      <h2 className='w-fit rounded text-2xl sm:text-4xl '>
        Founder & Full-Stack Developer –{' '}
        <a
          href='https://gobookstory.com'
          target='_blank'
          rel='noopener noreferrer'
          className='underline hover:-translate-y-1 hover:scale-100 duration-300'
        >
          Bookstory
        </a>{' '}
        {/* <a
          href='https://gobookstory.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-tahiti underline font-semibold text-lg hover:text-tahiti hover:-translate-y-1 hover:scale-100 duration-300'
        >
          gobookstory.com
        </a> */}
      </h2>
      <h3 className='text-xl sm:text-2xl text-left italic my-3'>
        <span>May 2025 – Present(5 months) in Tabriz, Iran</span>{' '}
      </h3>
      <ul className='list-disc text-xl sm:text-2xl py-3 ml-5'>
        <li>
          Founded <span className='font-semibold text-tahiti'>Bookstory</span>,
          an online marketplace for second-hand books, focused on affordability,
          sustainability, and environmental impact under the motto “Every book a
          story, every story a second life.”
        </li>
        <li>
          Designed and implemented the{' '}
          <span className='font-semibold text-tahiti'>
            full-stack architecture: Node.js + Express.js + PostgreSQL
          </span>{' '}
          for backend and{' '}
          <span className='font-semibold text-tahiti'>
            React + TypeScript + Tailwind CSS for frontend.
          </span>
        </li>
        <li>
          Built and deployed
          <span className='font-semibold text-tahiti'>
            RESTful server APIs,
          </span>{' '}
          enabling scalable book listing, user management, and transactional
          features.
        </li>
        <li>
          Established{' '}
          <span className='font-semibold text-tahiti'>CI/CD pipelines</span> to
          streamline deployment and ensure faster iteration cycles.
        </li>
        <li>
          Developed a responsive,{' '}
          <span className='font-semibold text-tahiti'>
            user-friendly front end
          </span>
          , improving usability and engagement for buyers and sellers across
          devices.
        </li>
        <li>
          Integrated sustainability-focused features and storytelling elements,
          positioning the platform as both{' '}
          <span className='font-semibold text-tahiti'>eco-conscious</span> and
          community-driven.
        </li>
      </ul>
    </div>
  )
}

export default Bookstory

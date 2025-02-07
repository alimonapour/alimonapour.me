import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

export function SideProjects() {
  return (
    <section className='container px-5 sm:px-8 xl:px-0 text-lg max-w-5xl flex flex-col font-medium border-t-2 py-2'>
      <h1 className='font-semibold text-3xl sm:text-4xl my-3'>Side Projects</h1>
      <>
        <ul className='list-disc ml-3'>
          <li>
            <h3 className='text-xl sm:text-2xl m-1 text-left py-1'>
              In one of my side projects, I developed a bookshelf application
              using React, React Hooks, Styled Component, React Router, and
              React Query.
            </h3>
            <div className='flex flex-col md:flex-row items-center '>
              <h3 className='text-lg sm:text-2xl m-1 py-1'>
                You can visit bookshelf app on your browser:{' '}
              </h3>
              <a
                className='flex items-center font-extrabold transition ease-in-out delay-150 bg-tahiti text-bermuda hover:bg-bermuda hover:text-tahiti hover:-translate-y-1 hover:scale-100 duration-300 p-2 ml-2 rounded-lg ring-metal ring-1'
                href='https://bookshelf.lol/'
                target='_blank'
                rel='noreferrer'
              >
                bookshelf
                <FontAwesomeIcon
                  icon={faBook}
                  style={{
                    fontSize: 30,
                    marginLeft: '0.5rem',
                  }}
                />
              </a>
            </div>
          </li>
          <li>
            <h3 className='text-xl sm:text-2xl m-1 text-left py-1'>
              Book Store Web application: React and Redux were used to develop
              book store web application.
            </h3>
          </li>
          <li>
            <h3 className='text-xl sm:text-2xl m-1 text-left py-1'>
              Store admin panel web application: React and Redux were used to
              develop the admin panel for the book store web application.
            </h3>
          </li>
          <li>
            <h3 className='text-xl sm:text-2xl m-1 text-left py-1'>
              Mobile application(freelance): Developed Café De Baron mobile
              application for both Android and IOS used React Native and Redux.
              (Because the API was not implemented, this application was removed
              from the Google Play Store)
            </h3>
          </li>
        </ul>
      </>
    </section>
  )
}

export default SideProjects

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

export function FreelanceExperience() {
  return (
    <div className='my-3 ml-3 border-t-2 font-medium'>
      <h2 className='p-1 w-fit rounded text-2xl sm:text-4xl my-5 '>
        React Native Developer @ Freelance
      </h2>
      <h3 className='text-xl sm:text-2xl my-3 text-left italic'>
        July 2019 - Jan 2020 (7 months) in Tabriz, Iran
      </h3>
      <h6 className='text-xl sm:text-2xl my-3  text-left'>
        Shafaq News Agency App. Be informed of the latest news and reports
        through the application of Shafaq News Agency. Political, Economic,
        Sports News, and Reports, everything that occupies your interest. The
        application is available in Arabic, Kurdish, and English.
      </h6>
      <ul className='list-disc text-xl text-left py-3 ml-5'>
        <li>
          The Shafaaq News mobile application was developed using{' '}
          <span className='font-semibold text-tahiti'>React Native</span> and{' '}
          <span className='font-semibold text-tahiti'>Redux</span> for{' '}
          <span className='font-semibold text-tahiti'>Android</span> and{' '}
          <span className='font-semibold text-tahiti'>IOS</span>.
        </li>
        <li>
          Data is fetched from{' '}
          <span className='font-semibold text-tahiti'>RESTful API</span> and
          shown in the application.
        </li>
        <li>
          <span className='font-semibold text-tahiti'>Redux-persist</span> was
          used to persist data.
        </li>

        <li>
          <span className='font-semibold text-tahiti'>
            Push notification system
          </span>{' '}
          has been implemented using{' '}
          <span className='font-semibold text-tahiti'>
            react-native-firebase
          </span>
          .
        </li>
      </ul>
      <div className='flex flex-col sm:flex-row items-center justify-around py-3'>
        <Link href='https://play.google.com/store/apps/details?id=com.shafaaq.app'>
          <a
            className='flex items-center font-extrabold transition ease-in-out delay-150 bg-tahiti  text-bermuda hover:bg-bermuda hover:text-tahiti hover:-translate-y-1 hover:scale-100  duration-300 p-3 mb-3 sm:mb-0 rounded-lg ring-metal ring-1'
            target='_blank'
          >
            Shafaaq News on{' '}
            <FontAwesomeIcon
              icon={faGooglePlay}
              style={{
                fontSize: 30,
                marginLeft: '0.5rem',
              }}
            />
          </a>
        </Link>

        <Link href='https://apps.apple.com/us/app/shafaq-news/id1476990880'>
          <a
            className='flex items-center sm:w-auto font-extrabold transition ease-in-out delay-150 bg-tahiti  text-bermuda hover:bg-bermuda hover:text-tahiti hover:-translate-y-1 hover:scale-100  duration-300 p-3 rounded-lg ring-metal ring-1'
            target='_blank'
          >
            Shafaaq News on{' '}
            <FontAwesomeIcon
              icon={faAppStore}
              style={{
                fontSize: 30,
                marginLeft: '0.5rem',
              }}
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default FreelanceExperience

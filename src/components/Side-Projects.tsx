import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

export function SideProjects(): JSX.Element {
  const projects = [
    {
      title: 'Bookshelf Application',
      description:
        'In one of my side projects, I developed a bookshelf application using React, React Hooks, Styled Component, React Router, and React Query.',
      link: 'https://bookshelf.lol/',
      linkText: 'bookshelf',
      hasLink: true,
    },
    {
      title: 'Store Admin Panel',
      description:
        'Store admin panel web application: React and Redux were used to develop the admin panel for the book store web application.',
      hasLink: false,
    },
    {
      title: 'Café De Baron Mobile App',
      description:
        'Mobile application(freelance): Developed Café De Baron mobile application for both Android and IOS used React Native and Redux. (Because the API was not implemented, this application was removed from the Google Play Store)',
      hasLink: false,
    },
  ]

  return (
    <section className='container px-5 sm:px-8 xl:px-0 text-lg max-w-5xl flex flex-col font-medium border-t-2 py-2'>
      <motion.h1
        className='font-semibold text-3xl sm:text-4xl my-3'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false }}
      >
        Side Projects
      </motion.h1>
      <motion.ul className='list-disc ml-3'>
        {projects.map((project, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
                type: 'spring',
                stiffness: 120,
                damping: 15,
              },
            }}
            viewport={{ once: false, margin: '-30px' }}
            className='mb-4'
          >
            <h3 className='text-xl sm:text-2xl m-1 text-left py-1'>
              {project.description}
            </h3>
            {project.hasLink && (
              <motion.div
                className='flex flex-col md:flex-row items-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2 + 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
                viewport={{ once: false }}
              >
                <h3 className='text-lg sm:text-2xl m-1 py-1'>
                  You can visit bookshelf app on your browser:{' '}
                </h3>
                <motion.a
                  className='flex items-center font-extrabold transition ease-in-out delay-150 bg-tahiti text-bermuda hover:bg-bermuda hover:text-tahiti hover:-translate-y-1 hover:scale-100 duration-300 p-2 ml-2 rounded-lg ring-metal ring-1'
                  href={project.link}
                  target='_blank'
                  rel='noreferrer'
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {project.linkText}
                  <FontAwesomeIcon
                    icon={faBook}
                    style={{
                      fontSize: 30,
                      marginLeft: '0.5rem',
                    }}
                  />
                </motion.a>
              </motion.div>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default SideProjects

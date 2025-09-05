import { motion } from 'framer-motion'

export function About(): JSX.Element {
  return (
    <article className='container px-5 sm:px-8 xl:px-0 text-lg max-w-5xl flex flex-col'>
      <h1 className=' text-3xl sm:text-4xl font-semibold my-3'>About Me</h1>
      <section className='space-y-3 ml-2 font-medium'>
        <p className='text-xl sm:text-2xl text-left'>
          I am a{' '}
          <span className='font-semibold text-tahiti '>
            Front-End developer
          </span>{' '}
          with{' '}
          <span className='font-semibold text-tahiti'>
            over 7 years of experience{' '}
          </span>{' '}
          developing high-quality, maintainable, and tested web applications.
          Proficient in{' '}
          <span className='font-semibold text-tahiti'>JavaScript</span> and
          <span className='font-semibold text-tahiti'> TypeScript</span> with
          expertise in
          <span className='font-semibold text-tahiti'> React JS</span> and{' '}
          <span className='font-semibold text-tahiti'>Next JS</span>.
          Consistently delivered efficient, well-tested code, and contributed to
          product development by collaborating closely with designers and
          product managers. Successfully optimized performance across multiple
          web browsers, enhancing user experience. Engaged in continuous
          learning to integrate new technologies and best practices. Fluent in
          English, with a strong performance history delivering scalable,
          high-quality code.
        </p>

        <p className='text-xl sm:text-2xl text-left'>
          Furthermore, I am also experienced with{' '}
          <span className=' font-semibold text-tahiti '>
            Node JS and Express JS
          </span>
          . I can also work as a full-stack developer but prefer front-end
          development that I am very passionate about.
        </p>
        <p className='text-xl sm:text-2xl text-left'>
          Also, as a{' '}
          <span className='font-semibold text-tahiti'>
            React Native developer
          </span>{' '}
          for my freelancing experience, I developed Android and IOS
          applications, one of which is in the Google Play store and the Apple
          App Store.
        </p>
        <p className='text-xl sm:text-2xl text-left'>
          Besides being <span className='text-tahiti'>passionate</span>,{' '}
          <span className='text-tahiti'>motivated</span>, and{' '}
          <span className='text-tahiti'>hardworking</span>, I also love solving
          challenges, writing tests, fixing bugs, and learning new things and
          new technologies . Furthermore, I&apos;m{' '}
          <span className='text-tahiti'>flexible</span> and I embrace{' '}
          <span className='text-tahiti'>new challenges</span>.
        </p>
        <p className='text-xl sm:text-2xl text-left'>
          I would describe myself as an{' '}
          <span className='text-tahiti'>industrious</span>,{' '}
          <span className='text-tahiti'>self-motivated</span>,{' '}
          <span className='text-tahiti'>resourceful</span>, and{' '}
          <span className='text-tahiti'>positive person</span> who wants to have
          a long and successful career in this role and this industry.
        </p>
        <p className='text-xl sm:text-2xl text-left'>
          I am so eager to <span className='text-tahiti'>learn new skills</span>
          , <span className='text-tahiti'>be proactive</span> and{' '}
          <span className='text-tahiti'>
            keep up with trends in the development
          </span>{' '}
          world and <span className='text-tahiti'>evolving tech stack</span>,
          and my experience makes me{' '}
          <span className='text-tahiti'>an easy partner</span> to work with.
        </p>
        <p className='text-xl sm:text-2xl text-left'>
          The sport of football is very important to me, and I am also fond of
          watching movies and TV series as well as reading books in my free
          time.
        </p>
        <motion.div className='my-3'>
          <motion.h3
            className='text-xl sm:text-2xl my-3 text-left'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            Here are a few technologies I&apos;ve been working with recently:
          </motion.h3>
          <motion.ul
            className='grid lg:grid-cols-3 sm:grid-cols-2  text-xl sm:text-2xl py-3 font-semibold'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {[
              'JavaScript (ES6+)',
              'TypeScript',
              'React JS(Hooks)',
              'Next JS',
              'React Native',
              'HTML5 && CSS3',
              'Node JS (Express JS)',
              'Redux JS',
              'Jest',
              'Cypress',
              'React Testing Library',
              'Tailwind CSS',
            ].map((tech, index) => (
              <motion.li
                key={tech}
                className='bg-LightDark p-2.5 my-1 sm:mx-1 rounded ring-metal ring-2 text-center cursor-pointer'
                initial={{ opacity: 0, scale: 0.8, y: 30, rotateX: -15 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                    type: 'spring',
                    stiffness: 120,
                    damping: 15,
                  },
                }}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                  backgroundColor: '#06b6d4',
                  color: '#000',
                  boxShadow: '0 10px 25px rgba(6, 182, 212, 0.3)',
                  transition: {
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: false, margin: '-50px' }}
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>
    </article>
  )
}

export default About

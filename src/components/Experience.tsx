import TwelveGroupExperience from './work-experience/12-Experience'
import FreelanceExperience from './work-experience/freelance-experience'
import AdlAfarinanMandegar from './work-experience/AdlAfarinanMandegar'
import JuniorExperience from './work-experience/JuniorExperience'
import Bookstory from './work-experience/Bookstory'
import { motion } from 'framer-motion'

export function Experience(): JSX.Element {
  const experiences = [
    { component: Bookstory, delay: 0.1 },
    { component: AdlAfarinanMandegar, delay: 0.2 },
    { component: TwelveGroupExperience, delay: 0.3 },
    { component: FreelanceExperience, delay: 0.4 },
    { component: JuniorExperience, delay: 0.5 },
  ]

  return (
    <section className='container px-5 sm:px-8 xl:px-0 text-lg max-w-5xl flex flex-col'>
      <motion.h1
        className='text-3xl sm:text-4xl font-semibold my-3'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false }}
      >
        Work Experience
      </motion.h1>
      {experiences.map(({ component: Component, delay }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 0.8,
              delay,
              ease: [0.16, 1, 0.3, 1],
              type: 'spring',
              stiffness: 100,
              damping: 20,
            },
          }}
          viewport={{ once: false, margin: '-50px' }}
        >
          <Component />
        </motion.div>
      ))}
    </section>
  )
}

export default Experience

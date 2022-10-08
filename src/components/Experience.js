import TwelveGroupExperience from './work-experience/12-Experience'
import FreelanceExperience from './work-experience/freelance-experience'

export function Experience() {
  return (
    <section className='container px-5 sm:px-8 xl:px-0 text-lg max-w-5xl flex flex-col'>
      <h1 className='text-LightYellow text-3xl sm:text-4xl my-3 text-left font-bold'>
        Work Experience
      </h1>
      <TwelveGroupExperience />
      <FreelanceExperience />
    </section>
  )
}

export default Experience

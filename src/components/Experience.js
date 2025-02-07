import TwelveGroupExperience from './work-experience/12-Experience'
import FreelanceExperience from './work-experience/freelance-experience'
import AdlAfarinanMandegar from './work-experience/AdlAfarinanMandegar'
import JuniorExperience from './work-experience/JuniorExperience'

export function Experience() {
  return (
    <section className='container px-5 sm:px-8 xl:px-0 text-lg max-w-5xl flex flex-col'>
      <h1 className='text-3xl sm:text-4xl font-semibold my-3'>
        Work Experience
      </h1>
      <AdlAfarinanMandegar />
      <TwelveGroupExperience />
      <FreelanceExperience />
      <JuniorExperience />
    </section>
  )
}

export default Experience

export function About() {
  return (
    <article className='container px-5 sm:px-8 xl:px-0 text-lg max-w-5xl flex flex-col'>
      <h1 className='bg-titleBgColor w-fit rounded p-2 text-3xl sm:text-4xl font-semibold my-3'>
        About Me
      </h1>
      <section className='space-y-3 ml-2 font-medium'>
        <p className='text-xl sm:text-2xl text-left'>
          I am a Front-End developer with over 4 years of experience in
          implementing complex web applications, specializing in SPA development
          utilizing React ecosystem.
        </p>
        <p className='text-xl sm:text-2xl text-left'>
          Furthermore, I am also experienced with Node JS and Express JS. I can
          also work as a full-stack developer but prefer front-end development
          that I am very passionate about.
        </p>
        <p className='text-xl sm:text-2xl text-left'>
          Also, as a React Native developer for my freelancing experience, I
          developed Android and IOS applications, one of which is in the Google
          Play store and the Apple App Store.
        </p>
        <p className='text-xl sm:text-2xl text-left'>
          Besides being passionate, motivated, and hardworking, I also love
          solving challenges, writing tests, fixing bugs, and learning new
          things and new technologies. Furthermore, I&apos;m flexible and I
          embrace new challenges.
        </p>
        <p className='text-xl sm:text-2xl text-left'>
          I would describe myself as an industrious, self-motivated,
          resourceful, and positive person who wants to have a long and
          successful career in this role and this industry.
        </p>
        <p className='text-xl sm:text-2xl text-left'>
          I am so eager to learn new skills, be proactive and keep up with
          trends in the development world and evolving tech stack, and my
          experience makes me an easy partner to work with.
        </p>
        <p className='text-xl sm:text-2xl text-left'>
          The sport of football is very important to me, and I am also fond of
          watching movies and TV series as well as reading books in my free
          time.
        </p>
        <div className='my-3'>
          <h3 className='text-xl sm:text-2xl my-3 text-left'>
            Here are a few technologies I’ve been working with recently:
          </h3>
          <ul className='grid lg:grid-cols-3 sm:grid-cols-2 list-disc list-inside text-xl sm:text-2xl py-3 ml-3'>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React JS(Hooks) </li>
            <li>Next JS</li>
            <li>React Native</li>
            <li>Redux JS</li>
            <li>HTML5 && CSS3</li>
            <li>Node JS (Express JS)</li>
            <li>Jest</li>
            <li>Cypress</li>
            <li>React Testing Library</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </section>
    </article>
  )
}

export default About

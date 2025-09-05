import Head from 'next/head'
import Navbar from '../src/components/Navbar'
import Avatar from '../src/components/Avatar'
import About from '../src/components/About'
import Experience from '../src/components/Experience'
import SideProjects from '../src/components/Side-Projects'
import FooterInfo from '../src/components/Footer-Info'
import ScrollButton from '../src/components/utils/ScrollToTopButton'
// import HelixLine from '../src/components/HelixLine'
import AnimatedSection from '../src/components/AnimatedSection'
import PerformanceOptimizer from '../src/components/PerformanceOptimizer'
import ScrollProgressBar from '../src/components/ScrollProgressBar'

export default function Home(): JSX.Element {
  return (
    <div className='w-full bg-color text-silver'>
      <Head>
        <title>Ali Monapour</title>
        <link rel='icon' href='/A-white.png' />
      </Head>
      <PerformanceOptimizer />
      <ScrollProgressBar />
      {/* <HelixLine /> */}
      <Navbar />
      <main className='space-y-16'>
        <div className='w-full mt-7' id='hero'>
          <AnimatedSection delay={0.3} direction='up'>
            <Avatar />
          </AnimatedSection>
        </div>

        <div id='about' className='w-full pt-20'>
          <AnimatedSection delay={0.2} direction='up' duration={1.0}>
            <About />
          </AnimatedSection>
        </div>

        <div id='experience' className='w-full pt-20'>
          <AnimatedSection delay={0.3} direction='left' duration={1.0}>
            <Experience />
          </AnimatedSection>
        </div>
        <div id='side_projects' className='w-full pt-20'>
          <AnimatedSection delay={0.2} direction='right' duration={1.0}>
            <SideProjects />
          </AnimatedSection>
        </div>
      </main>

      <footer className='flex flex-col items-center py-8 mt-10 border-t border-solid border-zinc-200'>
        <AnimatedSection delay={0.3} direction='up'>
          <FooterInfo />
        </AnimatedSection>
      </footer>
      <ScrollButton />
    </div>
  )
}

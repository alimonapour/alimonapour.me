import Head from 'next/head'
import Navbar from '../src/components/Navbar'
import Avatar from '../src/components/Avatar'
import About from '../src/components/About'
import Experience from '../src/components/Experience'
import SideProjects from '../src/components/Side-Projects'
import FooterInfo from '../src/components/Footer-Info'
import ScrollButton from '../src/components/utils/ScrollToTopButton'
export default function Home() {
  return (
    <div className='w-full bg-color'>
      <Head>
        <title>Ali Monapour</title>
        <meta name='description' content='Front-End developer' />
        <link rel='icon' href='/A.png' />
      </Head>
      <Navbar />
      <main className='space-y-16'>
        <div className='w-full mt-7' id='hero'>
          <Avatar />
        </div>

        <div id='about' className='w-full pt-20'>
          <About />
        </div>

        <div id='experience' className='w-full pt-20'>
          <Experience />
        </div>
        <div id='side_projects' className='w-full pt-20'>
          <SideProjects />
        </div>
      </main>

      <footer className='flex flex-col items-center py-8 mt-10 border-t border-solid border-zinc-200'>
        <FooterInfo />
      </footer>
      <ScrollButton />
    </div>
  )
}

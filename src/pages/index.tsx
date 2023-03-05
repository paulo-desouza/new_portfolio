import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { HomeContainer } from '@/components/HomeContainer'
import { Profile } from '@/components/Profile'
import { Skills } from '@/components/Skills'
import { Toolbox } from '@/components/Toolbox'
import { Certifications } from '@/components/Certifications'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <Head>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        
        <HomeContainer> 
          <div style={{ paddingTop: 20 }}>

          
            <Profile />

            <Certifications/>
          
          </div>
          <div style={{ paddingTop: 20, paddingBottom: 20}}>

            <Skills />
            <Toolbox />

          </div>
          <div style={{ paddingTop: 20, paddingBottom: 20}}>

            <Experience />

            <Projects />

          </div>
        </HomeContainer>
      </main>
    </>
  )
}

//MEDIA-CARRY

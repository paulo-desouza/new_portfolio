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
import { Column1 } from '@/components/Column1'


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
          <Column1>
            
            <Profile />
            <Certifications/>

          </Column1>
          <Column1>

            <Skills />
            <Toolbox />

          
          </Column1>
          <Column1>

            <Experience />
            <Projects />

          </Column1>
        </HomeContainer>
      </main>
    </>
  )
}

//MEDIA-CARRY

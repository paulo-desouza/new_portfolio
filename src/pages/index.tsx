import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { HomeContainer } from '@/components/HomeContainer'
import { Profile } from '@/components/Profile'
import { Toolbox } from '@/components/Toolbox'
import { Project1 } from '@/components/Project'
import { Column1 } from '@/components/Column1'
import { Column2 } from '@/components/Column2'



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
            <Toolbox />
          </Column1>

          <Column2>
            <Project1/>
          </Column2>

          <Column2>
            <Project1/>
            <Project1/>
            <Project1/>
            
          </Column2>
        </HomeContainer>
      </main>
    </>
  )
}

//MEDIA-CARRY

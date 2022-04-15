import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/02_Organisms/About/About'
import Customers from '../components/02_Organisms/Customers/Customers'
import Footer from '../components/02_Organisms/Footer.tsx/Footer'
import HeroTeaser from '../components/02_Organisms/HeroTeaser/HeroTeaser'
import Loader from '../components/02_Organisms/Loader/Loader'
import Projects from '../components/02_Organisms/Projects/Projects'
import WhatIDo from '../components/02_Organisms/WhatIDo/WhatIDo'
import { getAPI } from '../lib/api'

interface HomeProps {
  heroteaser: {
    title: string,
    tagline: string,
  }
}

const fallback: HomeProps = {
  heroteaser: {
    title: '',
    tagline: '',
  }
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>VogelVlug</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Loader />

      <HeroTeaser 
        header={props.heroteaser.title}
        tagline={props.heroteaser.tagline}
      />

      <About 
        header='Hui, du machst ja ne ganze Menge!' 
        paragraph='Ja, 40 Stunden die Woche das Gleiche zu machen, würde mir schnell langweilig werden. 
        Zum Glück hab ich da als Medieninformatiker die Möglichkeit mich in vielen Bereichen kreativ auszuleben.'
      />

      <WhatIDo />

      <Customers />

      <Projects />

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const heroteaser = await getAPI('/heroteaser')

  return {
    props: {
      heroteaser: heroteaser.attributes || fallback,
    },
    revalidate: 30,
  }
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import { fetchAPI } from '../lib/api'
import Footer from '../components/02_Organisms/Footer.tsx/Footer'
import TextBox from '../components/02_Organisms/TextBox/TextBox'

interface DatenschutzProps {
  title: string,
  text: string,
}

const fallback: DatenschutzProps = {
  title: '',
  text: ''
}

const Datenschutz: NextPage<DatenschutzProps> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title} | VogelVlug</title>
      </Head>

      <TextBox title={props.title} text={props.text} />

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const datenschutz = await fetchAPI('/richtexts', { filters: { slug: 'datenschutz' } })

  return {
    props: datenschutz[0]?.attributes || fallback,
    revalidate: 30,
  }
}

export default Datenschutz
